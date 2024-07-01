// eslint-disable-next-line no-unused-vars
import React from "react";
import Gender from "./Gender";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full p-6 w-full rounded-lg shadow-md bg-indigo-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-300">
          SignUp <span className="text-orange-600">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input input-bordered w-full h-10 "
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full h-10 "
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10 "
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="input input-bordered w-full h-10 "
            />
          </div>

          {/*Gender Checkbox goes here */}
            <Gender/>
          <a
            href="#"
            className="text-sm text-gray-200 hover:underline hover:text-orange- inline-block"
          >
            {"Already have an account"}
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
