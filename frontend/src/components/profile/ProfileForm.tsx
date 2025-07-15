import { useState } from "react";
import { IUser } from "../../types/user";
import { updateProfile } from "../../api/user.api";
import { toast } from "react-toastify";

interface ProfileFormProps {
    user: IUser;
}

const ProfileForm = ({ user }: ProfileFormProps) => {
    const [formData, setFormData] = useState({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        profession: user.profession || "",
        phone: user.phone || "",
        location: user.location || "",
        currentPassword: "",
        newPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            await updateProfile(formData);
          toast.success("Profile Updated Successfully!");
        } catch (error) {
            console.error("Update failed:", error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-12">
            {/* ... same structure ... just plug in value/onChange on inputs */}
            <section className="space-y-8">
                <h2 className="text-2xl font-semibold text-gray-800">Profile Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="mb-1 text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="mb-1 text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="profession" className="mb-1 text-sm font-medium text-gray-700">
                            Profession
                        </label>
                        <input
                            id="profession"
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            placeholder="Enter Profession"
                            type="text"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter Phone"
                            type="tel"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="location" className="mb-1 text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter Location"
                            type="text"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>
                </div>
            </section>

            <section className="space-y-8">
                <h2 className="text-2xl font-semibold text-gray-800">Security Settings</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="currentPassword" className="mb-1 text-sm font-medium text-gray-700">
                            Current Password
                        </label>
                        <input
                            id="currentPassword"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            type="password"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="newPassword" className="mb-1 text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            id="newPassword"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            type="password"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                        />
                    </div>
                </div>
            </section>

            <div className="text-right">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition cursor-pointer"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default ProfileForm;
