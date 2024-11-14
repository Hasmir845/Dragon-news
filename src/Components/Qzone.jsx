import photoClass from "../assets/class.png";
import photoPlay from "../assets/playground.png";
import photoSwimming from "../assets/swimming.png";

const Qzone = () => {
    return (
        <div className=" bg-gray-100">
            <h2 className=" font-semibold mb-3">Q-Zone</h2>
            <div className =" flex flex-col justify-center mb-2">
            <img src={photoSwimming} alt="" />
            </div>
            <div className="flex flex-col justify-center mb-2">
            <img src={photoClass} alt="" />
            </div>
            <div className="flex flex-col justify-center mb-2">
            <img src={photoPlay} alt="" />
            </div>
        </div>
    );
};

export default Qzone;