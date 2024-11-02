import location_icon from '../../assets/icons/Location.png'
import money from '../../assets/icons/money.png'
import Button from '../Button/Button';

const Job = ({data}) => {
    const {company_name, job_title, job_type, location, remote_or_onsite, salary, logo} = data;
    return (
        <div className="card bg-base-100 border-2">
            <div className="card-body">
                <img className="w-24" src={logo} alt={`${company_name} logo`} />
                <h3 className="text-left text-xl md:text-2xl font-semibold">{job_title}</h3>
                <p className="text-left text-xl">{company_name}</p>
                <div className="w-6/12 flex gap-4 mb-2">
                    <p className="border-2 text-blue-500 rounded-md py-2 border-blue-500">{remote_or_onsite}</p>
                    <p className="border-2 text-blue-500 rounded-md py-2 border-blue-500">
                    {job_type}</p>
                </div>
                <div className="flex gap-3 items-center mb-4">
                    <div className='flex items-center'>
                        <img src={location_icon} alt="location_icon" />
                        <span>{location}</span>
                    </div>
                    <div className='flex items-center'>
                        <img src={money} alt="money_icon" />
                        <span>{salary}</span>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Button title={"Show Details"}></Button>
                </div>
            </div>
        </div>
    );
};

export default Job;