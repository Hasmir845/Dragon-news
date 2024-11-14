import moment from 'moment';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className=' flex flex-col justify-center items-center gap-2 py-3'>
            <img className=' w[300px]' src={logo} alt="" />
            <h2 className=' text-gray-400 pb-2 '>Journalism Without Fear or Favour</h2>
            <p className=' mb-2'>{moment().format('dddd, MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;