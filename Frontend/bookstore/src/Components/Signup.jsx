import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-white md:h-screen flex items-center h-screen ml-8 mt-20 md:mt-0 md:ml-0 w-[450px] md:w-auto justify-center">
        <div className="bg-white w-[450px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-3 hover:border-black rounded-full"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl">Signup</h3>

              <div className="mt-8 grid space-y-2">
                <span className="text-xl space-y-3">Name:</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 h-10 rounded-sm border px-3"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>

              <div className="mt-8 grid space-y-2">
                <span className="text-xl space-y-3">Email:</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 h-10 rounded-sm border px-3"
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
                  className="w-80 h-10 rounded-sm border px-3"
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
                  className="bg-pink-400 hover:bg-pink-500 duration-300 transition-all text-white ml-1 px-3 py-1 rounded-md"
                >
                  Signup
                </button>
                <p className="">
                  Already Have an Account?
                  <button
                    className="underline text-blue-700 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
