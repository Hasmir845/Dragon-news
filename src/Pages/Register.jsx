import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createNewUser, setUser} = useContext(AuthContext);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(form, name, photo, email, password);
        createNewUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            console.log(error.message, error.code)
        })
        
    }
    return (
        <div>
            <div className=' min-h-screen flex justify-center items-center'>
             <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className=' text-2xl font-semibold text-center'>Register Your Account</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className=' text-center font-semibold'>Already Have An Account ? <Link to='/auth/login'><span className=' text-red-500'>Login</span></Link></p>
    </div>
        </div>
        </div>
    );
};

export default Register;