import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const AddAmount = () => {
  
  const [type,setType]=useState("");
  const [amount,setAmount]=useState(0.0);
  const navigate=useNavigate();

  const addMoney=async(e)=>{
     e.preventDefault();
    try {
      const response=await axios.post("http://localhost:8080/api/transaction/addOrRemoveMoney",{
        type:type,
        amount:amount
      },
    {withCredentials:true})

      console.log(response.data);
      alert(response.data)
      setType("")
      setAmount(0)
      navigate("/dashboard")
      

    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  return (
    <div className='h-screen'>
    <Navbar />
     <div className="h-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Type</label>
            <select name="type" id="type" value={type} onChange={(e)=>{setType(e.target.value)}}>
                <option value="">choose one</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-1">Amount</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={amount}
              onChange={(e)=>{setAmount(e.target.value)}}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={(e)=>{addMoney(e)}}
          >
            Pay
          </button>
        </form>
        
      </div>
    </div>
    </div>
    
  )
}

export default AddAmount