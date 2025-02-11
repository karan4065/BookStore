import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Login from "./Login";
import toast from "react-hot-toast";

function Signup() { // this is signup api call 

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data) {
        toast.success("Signup Successfully !!");
        navigate(from ,{replace:true});
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error : " + err.response.data.message); 
      } else {
        alert("An unexpected error occurred!");
      }
    }
  };
  

  return (
    <>
      <div className="bg-white dark:bg-slate-700 dark:text-white  md:h-screen flex items-center h-screen ml-8 mt-20 md:mt-0 md:ml-0 w-[450px] md:w-auto justify-center">
        <div className="bg-white  dark:bg-slate-700  w-[450px]">
          <div className="modal-box dark:bg-slate-800 dark:text-white ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-3 hover:border-white dark:bg-slate-800 dark:text-white hover:border-black rounded-full"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl">Signup</h3>

              <div className="mt-8 grid space-y-2">
                <span className="text-xl space-y-3">Name:</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 h-10 dark:bg-black dark:text-white rounded-sm border px-3"
                  {...register("fullname", { required: "Name is required" })}
                />
                {errors.fullname && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>

              <div className="mt-8 grid space-y-2">
                <span className="text-xl space-y-3">Email:</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 h-10 dark:bg-black dark:text-white rounded-sm border px-3"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>

              <div className="mt-8 grid space-y-2">
                <span className="text-xl space-y-3">Password:</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 h-10 dark:bg-black dark:text-white rounded-sm border px-3"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </div>

              {/* button */}
              <div className="flex mt-8 py-1 justify-between">
                <button
                  type="submit"
                  className="bg-pink-400 hover:bg-pink-500  dark:bg-pink-600 dark:hover:bg-pink-700 duration-300 transition-all text-white ml-1 px-3 py-1 rounded-md"
                >
                  Signup
                </button>
            <div>
               <p>
                  Already Have an Account? 
                   <a className="underline text-blue-700 cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}> 
                    Login
                  </a>
               </p>
            </div>
              </div>
            </form>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
