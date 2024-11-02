import Button from "../Button/Button"
import heroImage from "../../assets/images/user.png"

const Banner = () => {
    return (
        <div className="md:grid grid-cols-2 items-center gap-6 mb-16 bg-purple-50">
            <div>
                <h1 className="text-3xl mb-4 md:text-5xl lg:text-7xl lg:w-10/12 font-bold">One Step Closer To Your <span className="text-blue-500">Dream Job</span></h1>
                <p className="mb-6  lg:w-10/12">
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <Button title={"Get Started"}></Button>
            </div>
            <img className="w-full" src={heroImage} alt="hero image" />
        </div>
    );
};

export default Banner;