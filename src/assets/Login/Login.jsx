import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const handleLogin=async(e)=>{
     e.preventDefault();
    try {
      const response=await axios.post("http://localhost:8080/api/user/login",{
        email:email,
        password:password
      },
    {withCredentials:true})

      console.log(response.data);
      alert(response.data)
      setEmail("")
      setPassword("")
      if(response.data==="User Logged in"){
        navigate("/dashboard")
      }else{
        alert("invalid credentials..!")
      }

    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  return (
    
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={email}
              required
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={(e)=>{handleLogin(e)}}
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don’t have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
    
  )
}

export default Login
