import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addToken } from "../utils/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const authToken = useSelector((store) => store?.auth?.authToken)
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const res = await fetch("http://localhost:8001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await res.json();
      dispatch(addToken(result));
      sessionStorage.setItem('authToken', result.token)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    if(sessionStorage.getItem('authToken') || authToken) navigate('/');
  })

  return (
    <div className="w-full flex justify-center items-center mt-20 ">
      <div className="w-96">
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              {...register("username", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.username
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
