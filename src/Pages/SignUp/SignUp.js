import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signUpUser, updateUser, signUpGoogle} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const role = data.role;
        signUpUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success("Registration Successful")
            const userInfo = {
                displayName: name
            }
            updateUser(userInfo)
            .then(()=>{

            })
            .catch(error=> {
                console.error(error)
                setSignUpError(error.message);
            })
        })
        .catch(error=> {
            console.error(error)
            setSignUpError(error.message);
        })
    }

    const handleSocialLogin = () => {
        signUpGoogle()
        .then(result=> {
            const user = result.user;
            console.log(user);
        })
        .catch(error=> {
            console.error(error)
            setSignUpError(error.message);
        })
    }
    return (
        <div className='flex items-center my-10'>
            <div className='md:w-4/12 bg-white p-7 mx-auto shadow-lg rounded-lg'>
                <h2 className='text-3xl font-bold text-center mb-5'>Sign up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input 
                            type="text"
                            {...register("name", {required: "Name is required"})}
                            aria-invalid={errors.name ? "true" : "false"}
                            placeholder="Enter your name" 
                            className="input input-bordered" 
                        />
                        {errors.name && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.name?.message}</p>}
                    </div>
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
                            {...register("password", 
                                {
                                    required: "Password is required",
                                    minLength: {value: 6, message: "Password should contain minimum 6 character with one capital, small alphabet and one number"},
                                    pattern: {value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, message: "Password should contain minimum 6 character with one capital, small alphabet and one number"}
                                })}
                            aria-invalid={errors.password ? "true" : "false"}
                            placeholder="Enter your password" 
                            className="input input-bordered" 
                        />
                        {errors.password && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.password?.message}</p>}
                    </div>
                    <div className='form-control mt-5'>
                        <select {...register("role")}
                        className="select select-bordered select-sm w-full">
                            <option selected value="user">User</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>
                    <input type="submit" value="Sign up" className='btn w-full btn-primary text-white mt-5'/>
                    {signUpError && <p role={alert} className="text-sm text-error mt-2 ml-2">{signUpError}</p>}
                </form>
                <div className="divider">OR</div>
                <button onClick={handleSocialLogin} className='btn btn-secondary w-full btn-outline'><FcGoogle className='text-2xl mr-3'/>Google</button>
                <p className='text-sm mt-3 ml-2 text-center'>Already have an account? <Link to="/login">Login here</Link></p>
            </div>           
        </div>
    );
};

export default SignUp;