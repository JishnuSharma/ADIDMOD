import FeatureSwiper from "../components/landing/FeatureSwiper";
import Hero from "../components/landing/Hero";
import NeedForMonitoring from "../components/landing/NeedForMonitoring";
import WorkingSteps from "../components/landing/WorkingSteps";
import Headings from "../components/shared/Headings";

const Landing = () => {
    return (
        <div>
            <div>
                <Hero />
            </div>
            <div className="flex justify-center mt-8 flex-col items-center">
                <Headings title="FEATURES WE OFFER" />
                <FeatureSwiper />
            </div>
            <div className="flex justify-center mt-8 flex-col items-center">
                <Headings title="WORKING WITH ADID" />
                <WorkingSteps/>
            </div>
            <div className="flex justify-center mt-20 flex-col items-center">
                <Headings title="NEED FOR MONITORING IOT ENVIRONMENTS" />
                <NeedForMonitoring/>
            </div>
        </div>
    );
};

export default Landing;
