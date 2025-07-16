from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
from sklearn.cluster import DBSCAN
import matplotlib
matplotlib.use("Agg")
import os
import matplotlib.pyplot as plt
from flask_cors import CORS

app = Flask("iotapi")
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/iotapi/detect_anomalies', methods=['POST'])
def detect_anomalies():
    lower_bound = float(request.form.get('lower'))
    upper_bound = float(request.form.get('upper'))
    attention = float(request.form.get('attention'))
    ftype = request.form.get('ftype')
    csv_file = request.files['csv_file']

    if ftype == 'xlsx':
        data = pd.read_excel(csv_file, engine='openpyxl')
    else:
        data = pd.read_csv(csv_file, low_memory=False, encoding='latin1')

    readings = data['humidity']
    total_len = len(readings)

    user_defined_anomalies = readings[(readings < lower_bound) | (readings > upper_bound)]
    filtered_readings = readings[(readings >= lower_bound) & (readings <= upper_bound)]

    if len(filtered_readings) == 0:
        return jsonify({
            "error": "No data points within specified bounds",
            "total_readings": total_len,
            "total_anomalies": len(user_defined_anomalies),
            "percentage_anomalies": 100.0 if total_len > 0 else 0,
            "feedback": "Requires Attention"
        }), 400

    filtered_readings = filtered_readings.values.reshape(-1, 1)
    dbscan_model = DBSCAN(eps=0.6, min_samples=600)
    dbscan_model.fit(filtered_readings)

    outliers = filtered_readings[dbscan_model.labels_ == -1]
    total_anomalies = len(user_defined_anomalies) + len(outliers)
    percentage_anomalies = (total_anomalies / total_len) * 100

    if attention < percentage_anomalies:
        feedback = "Requires Attention"
    elif attention - 5 > percentage_anomalies:
        feedback = "Stable"
    else:
        feedback = "Requires Maintenance"

    static_img_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static", "img")
    os.makedirs(static_img_dir, exist_ok=True)
    img_filename = "anomaly_plot.png"
    img_path = os.path.join(static_img_dir, img_filename)

    plt.figure(figsize=(12, 6))
    plt.scatter(range(len(filtered_readings)), filtered_readings, color='blue', label='IoT Device Readings (Within Range)')
    plt.scatter(np.where(dbscan_model.labels_ == -1), outliers, color='red', marker='x', label='DBSCAN Anomalies')
    plt.scatter(np.where((readings < lower_bound) | (readings > upper_bound)), user_defined_anomalies,
                color='orange', marker='o', label='User-Defined Anomalies')
    plt.xlabel('Data Point Index')
    plt.ylabel('Readings')
    plt.title('Outlier Detection in IoT Device Readings using DBSCAN and User-Defined Range')
    plt.legend()
    plt.grid(True)
    plt.savefig(img_path, format='png')
    plt.close()

    image_url = request.host_url + "static/img/" + img_filename

    response_data = {
        "total_readings": total_len,
        "total_anomalies": total_anomalies,
        "percentage_anomalies": percentage_anomalies,
        "image_url": image_url,
        "feedback": feedback
    }
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
