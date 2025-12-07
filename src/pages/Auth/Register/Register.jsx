import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("in the register page", location);

  const handleRegistration = (data) => {
    console.log(data);
    const updatedObj = {
      photoURL: data.photo,
      displayName: data.name,
    };
    console.log(updatedObj);

    registerUser(data.email, data.password, data.name, data.photo)
      .then(() => {
        toast.success("Register successfull");
         setTimeout(() => {
          navigate(location?.state || '/');
        }, 800);
      

        return updateUser(updatedObj);
      })
      .catch(() => {
        toast.failed("Register failed!");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-indigo-100 via-white to-indigo-50 px-4">
      <div className="card bg-white w-full max-w-sm shadow-xl rounded-xl border border-gray-200 p-5">
        <h3 className="text-3xl text-center font-bold text-indigo-600">
          Welcome to ContestHub
        </h3>
        <p className="text-center mt-2 font-medium text-gray-600">
          Please Register
        </p>

        <form
          className="card-body px-2"
          onSubmit={handleSubmit(handleRegistration)}
        >
          <fieldset className="fieldset space-y-1">
            {/* name */}
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered rounded-lg"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">Name is required</p>
            )}

            {/* photo */}
            <label className="label font-semibold">Photo</label>
            <input
              type="text"
              {...register("photo", { required: true })}
              className="input  w-full rounded-lg"
            />
            {errors.photo && (
              <p className="text-red-500 text-xs">Photo is required</p>
            )}

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
              Register
            </button>
          </fieldset>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              state={location.state}
              className="text-indigo-700 underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
