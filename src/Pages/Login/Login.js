import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className='flex items-center my-10'>
            <div className='md:w-4/12 bg-white p-7 mx-auto shadow-lg rounded-lg'>
                <h2 className='text-3xl font-bold text-center mb-5'>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="email"
                            {...register("email", {required: "Email is required"})}
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder="Enter your email" 
                            className="input input-bordered" 
                        />
                        {errors.email && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                            type="password"
                            {...register("password", {required: "Password is required"})}
                            aria-invalid={errors.password ? "true" : "false"}
                            placeholder="Enter your password" 
                            className="input input-bordered" 
                        />
                        {errors.password && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.password?.message}</p>}
                    <label className='text-sm text-secondary mt-3 ml-2'><Link>Forgot password?</Link></label>
                    </div>
                    <input type="submit" value="Login" className='btn w-full btn-primary text-white mt-5'/>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-secondary w-full btn-outline'><FcGoogle className='text-2xl mr-3'/>Google</button>
                <p className='text-sm mt-3 ml-2 text-center'>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </div>           
        </div>
    );
};

export default Login;