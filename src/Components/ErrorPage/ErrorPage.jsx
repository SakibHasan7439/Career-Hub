import { Link } from 'react-router-dom';
import errorImage from '../../assets/images/error.avif'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen relative'>
            <img src={errorImage} alt="error image" />
            <Link to={'/'} className='absolute bottom-28'>
                <button className='bg-white hover:bg-gray-100 text-black px-6 py-1 rounded-lg'>Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;