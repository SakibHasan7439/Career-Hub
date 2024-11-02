import { useLoaderData, useParams } from "react-router-dom"
import bgImage from '../../assets/images/bg1.png'
import Button from "../Button/Button";
import { addToStoredList } from "../../Utility/addToDb";

const JobDetails = () => {

    const {id} = useParams();
    const details = useLoaderData();
    console.log(details);
    const convertToInt = parseInt(id);

    const handleApplyNow = (id) =>{
        
        addToStoredList(id);
    }

    const detail = details.find((detail) => detail.id === convertToInt)
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information
    } = detail;

    return (
        <div className="mb-12">
            <div className="bg-purple-50 mb-8 pt-6">
            <h2 className="text-center text-3xl font-bold m-8">Job details</h2>
            <img src={bgImage} alt="bg image" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8">
                    <p className="mb-4"><span className="font-semibold">Job Description: </span>
                        {job_description}
                    </p>
                    <p><span className="font-semibold mb-4">Job Responsibility: </span>
                    {job_responsibility}
                    </p>
                    <div className="mb-4">
                        <p className="font-semibold">Educational Requirements: </p>
                        {educational_requirements}
                    </div>
                    <p className="font-semibold">Experiences: </p>
                    {experiences}
                </div>
                <div className="col-span-4">
                <div className="card bg-[#9873ff19] mb-4">
                    <div className="card-body">
                        <h2 className="card-title pb-3 border-b-2">Job Details</h2>
                        <p>Salary: {salary} per month</p>
                        <p className="mb-3">Job Title: {job_title}</p>
                        <h3 className="text-lg pb-3 border-b-2 font-semibold">Contact Information</h3>
                        <p>Phone: {contact_information.phone}</p>
                        <p>Email: {contact_information.email}</p>
                        <p>Address: {contact_information.address}</p>
                    </div>
                    </div>
                    <Button onClick={()=>handleApplyNow(id)} title={"Apply now"}></Button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;