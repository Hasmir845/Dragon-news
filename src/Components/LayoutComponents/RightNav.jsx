import React from 'react';
import FindUs from '../FindUs';
import Qzone from '../Qzone';
import SocialLogin from '../SocialLogin';

const RightNav = () => {
    return (
        <div className=' space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;