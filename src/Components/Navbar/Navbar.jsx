import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/CareerHub.png'
import Button from '../Button/Button';

const Navbar = ({title}) => {
    return (
        <>
        <div className="navbar bg-base-100 mb-8">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <NavLink to={'/'}>Statistics</NavLink>
                <NavLink to={'applied-job'}>Applied Jobs</NavLink>
                <NavLink to={'blog'}>Blog</NavLink>
            </ul>
            </div>
            <img src={logo} alt="Career hub logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-6 text-xl">
            <NavLink to={'/'}>Statistics</NavLink>
            <NavLink to={'applied-job'}>Applied Jobs</NavLink>
            <NavLink to={'blog'}>Blog</NavLink>
            </ul>
        </div>
        <div className="navbar-end">
            <Button title={"Start Applying"}></Button>
        </div>
        </div>

        {/* <div className='flex justify-between items-center'>
                <img src={logo} alt="Career hub logo" />
            <nav className='flex gap-6 text-xl'>
                <NavLink to={'/'}>Statistics</NavLink>
                <NavLink to={'applied-job'}>Applied Jobs</NavLink>
                <NavLink to={'blog'}>Blog</NavLink>
            </nav>
                <Button title={"Start Applying"}></Button>
        </div> */}
        </>
    );
};

export default Navbar;