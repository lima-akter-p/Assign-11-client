import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const location = useLocation();
  const {register,handleSubmit,formState: { errors },} = useForm();
  const {registerUser} = useAuth();


  const handleRegistration = (data) => {
    console.log(data);
    registerUser(data.email,data.password,data.name,data.photo)
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
          Welcome to ContestHub
        </h3>
        <p className="text-center mt-2 font-medium text-gray-600">
          Please Register
        </p>

        <form className="card-body px-2" onSubmit={handleSubmit(handleRegistration)}>
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
              type="file"
              {...register("photo", { required: true })}
              className="file-input file-input-bordered w-full rounded-lg"
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





// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router";

// const Register = () => {
//   const {register,handleSubmit,formState: {errors}} = useForm();
//   const handleRegistration = (data) =>{
//     console.log(data);

//   }
//   return (
//       <div className=" mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//           <h3 className="text-3xl text-center font-bold mt-2">Wellcome to ContestHub</h3>
//         <p className='text-center mt-2 font-bold'>please Register </p>
//       <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
//         <fieldset className="fieldset">
      

//             {/* name */}
//           <label className="label">Name</label>
//           <input type="text" {...register('name', {required:true})}
//            className="input" placeholder="your name" />
//            {errors.name?.type=== 'required' && <p className="text-red-500">Name is required</p>}

//            {/* image field */}
//           <label className="label">photo</label>
//           <input type="file" {...register('photo', {required:true})}
//            className="file-input" placeholder="your photo" />
//            {errors.photo?.type=== 'required' && <p className="text-red-500">photo is required</p>}

//             {/* email */}
//           <label className="label">Email</label>
//           <input type="email" {...register('email', {required:true})}
//            className="input" placeholder="Email" />
//            {errors.email?.type=== 'required' && <p className="text-red-500">Email is required</p>}
//            {/* password */}
          
//           <label className="label">Password</label>
//           <input type="password" {...register('password',
//             {required:true,
//             minLength:6
//             })} className="input" placeholder="Password" />
//              {
//              errors.password?.type ==='required' && <p className="text-red-500">password is required</p>
//              }
//              {
//                 errors.password?.type ==='minLength'&& <p className="text-red-500">password must be 6 character or longer.</p>
//              }

//           <div>
//             <a className="link link-hover">Forgot password?</a>
//           </div>
//           <button className="btn btn-neutral mt-4">Register</button>
//         </fieldset>
//          <p>Already have an account? <Link state={location.state}
//          className='text-blue-800 underline' to="/login">
//             Login</Link></p>
//       </form>
//       {/* <SocialLogin></SocialLogin> */}
//     </div>
 
//   );
// };

// export default Register;
