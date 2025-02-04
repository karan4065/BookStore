import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
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
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white h-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl">Login</h3>

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
                  className="bg-pink-400 text-white ml-1 px-3 py-1 rounded-md"
                >
                  Login
                </button>
                <p>
                  Not registered?
                  <Link
                    to="/signup"
                    className="underline text-blue-700 cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
