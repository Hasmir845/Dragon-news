import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className=' mb-3'>
            <h2 className=' font-semibold mb-3'>Login With</h2>
            <div className=' w-full space-y-2'>
                <button className=' w-full btn'><FaGoogle></FaGoogle>Login With Google</button>
                <button className=' w-full btn'><FaGithub></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;