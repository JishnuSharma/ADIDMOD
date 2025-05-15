import AuthorInfo from "../components/about/AuthorInfo";
import Hero from "../components/landing/Hero";
import Headings from "../components/shared/Headings";

const About = () => {
    return (
        <div>
            <div>
                <Hero />
            </div>
            <div className="mt-6 flex flex-col items-center justify-center">
                <Headings title="ABOUT ME" />
                <AuthorInfo/>
            </div>
        </div>
    );
};

export default About;