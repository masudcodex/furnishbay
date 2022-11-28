import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Components/Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {user, loginUser, signUpGoogle} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

       loginUser(email, password)
       .then(result=> {
            const user = result.user;
            console.log('Currently Logged in', user);
            toast.success('Login Successful');
            setUserEmail(email);
            reset();
       })
       .catch(error=>{
            console.error(error);
            setLoginError(error.message);
       })
    }

    const handleSocialLogin = () => {
        const role = 'user';
        const isVerified = false;
        signUpGoogle()
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success('Login Successful');
            saveUserToDatabase(user.displayName, user.email, role, isVerified);
            setUserEmail(user.email);
        })
        .catch(error=> {
            console.error(error)
            setLoginError(error.message);
        })
    }

    const saveUserToDatabase = (name, email, role, isVerified) => {
        const user = {
            userName: name,
            email: email,
            role: role,
            isVerified: isVerified
        }
        fetch('https://furnishbay-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            setUserEmail(email)
        })
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
                    {loginError && <p role={alert} className="text-sm text-error mt-2 ml-2">{loginError}</p>}
                </form>
                <div className="divider">OR</div>
                <button onClick={handleSocialLogin} className='btn btn-secondary w-full btn-outline'><FcGoogle className='text-2xl mr-3'/>Google</button>
                <p className='text-sm mt-3 ml-2 text-center'>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </div>           
        </div>
    );
};

export default Login;