import Button from "../Button/Button";

const ShowAppliedJob = ({job}) => {
    const {job_title, company_name, logo, job_type, salary, location} = job;
    return (
        <div className="md:flex gap-8 items-center w-8/12 border-2 p-5 rounded-lg mb-4 mx-auto">
            <img className="w-20" src={logo} alt="" />
            <div className="">
                <h2>{job_title}</h2>
                <p>{company_name}</p>
                <p>{location}</p>
                <div className="flex gap-4">
                    <p>{job_type}</p>
                    <p>{salary}</p>
                </div>
            </div>
            <Button title={"Show Details"}></Button>
        </div>
    );
};

export default ShowAppliedJob;