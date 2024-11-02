import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredAppliedJob } from "../../Utility/addToDb";
import ShowAppliedJob from "../ShowAppliedJob/ShowAppliedJob";

const AppliedPath = () => {
    const [addJob, setAddJob] = useState([]);
    const appliedJob = useLoaderData();

    useEffect(()=>{
        const storedJobList = getStoredAppliedJob();
        const storedJobInt = storedJobList.map((id) => parseInt(id));

        const showAppliedJob = appliedJob.filter((job)=> storedJobInt.includes(job.id))

        setAddJob(showAppliedJob);
    }, []);
    return (
        <div>
            <h2 className="m-8 text-5xl text-center font-bold">Job Applied: {addJob.length}</h2>

            {
                addJob.map((job)=> <ShowAppliedJob 
                key={job.id}
                job={job}
                >
                </ShowAppliedJob>)
            }
        </div>
    );
};

export default AppliedPath;