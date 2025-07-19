import AuthorInfo from "../components/about/AuthorInfo";
import Headings from "../components/shared/Headings";

const About = () => {
    return (
        <div>
            <div className="mt-6 flex flex-col items-center justify-center">
                <Headings title="ABOUT ME" />
                <AuthorInfo/>
            </div>
        </div>
    );
};

export default About;