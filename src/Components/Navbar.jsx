import { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className=" text-center md:flex justify-between items-center space-y-3">
            <div>
                {user?.name}
            </div>
            
            <div className=" space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
                
            </div>
            <div className=" flex justify-center items-center gap-2">
                <img src={userIcon} alt="" />
                <Link to = '/auth/login' className=" btn btn-neutral rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;