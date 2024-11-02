import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);
    
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    const handleShowAll = () =>{
        setShowAll(true);
    }

    const displayAllData = showAll ? jobs: jobs.slice(0, 4);


    return (
        <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Features Jobs</h2>
            <p className="mb-4">
            Explore thousands of job opportunities with all the information you need. Its your future
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {
                    displayAllData.map((data) => <Job
                     key={data.id}
                     data={data}>
                    </Job>)
                }
            </div>
            <Button onClick={handleShowAll} title={"Show All"}></Button>
        </div>
    );
};

export default FeaturedJobs;