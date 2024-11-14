import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";


const Navbar = () => {
    return (
        <div className=" text-center md:flex justify-between items-center space-y-3">
            <div></div>
            
            <div className=" space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
                
            </div>
            <div className=" flex justify-center items-center gap-2">
                <img src={userIcon} alt="" />
                <button className=" btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;