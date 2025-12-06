import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
     const location = useLocation();
    
     const {register,handleSubmit,formState: { errors },} = useForm();
     const { signInUser} = useAuth();

    const handleLogin = (data) => {
    console.log(data);
     signInUser(data.email,data.password)
    .then(result =>{
      console.log(result)
    })
    .catch(error =>{
      console.log(error)
    })
    };
    return (
         <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-indigo-100 via-white to-indigo-50 px-4">
      <div className="card bg-white w-full max-w-sm shadow-xl rounded-xl border border-gray-200 p-5">
        <h3 className="text-3xl text-center font-bold text-indigo-600">
          Welcome back
        </h3>
        <p className="text-center mt-2 font-medium text-gray-600">
          Please LogIn
        </p>

        <form className="card-body px-2" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset space-y-2">

           
            

          
            {/* email */}
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered rounded-lg"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">Email is required</p>
            )}

            {/* password */}
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className="input input-bordered rounded-lg"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-xs">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-xs">
                Password must be at least 6 characters long
              </p>
            )}

            {/* forgot */}
            <div className="mt-1">
              <a className="link link-hover text-sm text-indigo-600">
                Forgot password?
              </a>
            </div>

            {/* button */}
            <button className="btn bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg mt-3 w-full">
              Login
            </button>
          </fieldset>

          <p className="text-center text-sm mt-4">
            Are you new to ContestHub? {" "}
            <Link
              state={location.state}
              className="text-indigo-700 underline"
              to="/register"
            >
              Register
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    );
};

export default Login;