import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import money from "../images/money-with-wings-svgrepo-com.png"
const DashBoard = () => {

    const [wallet, setWallet] = useState({});
    const [user,setUser]=useState({});

    const handlefetchBalance = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/wallet/getWallet", { withCredentials: true })
            console.log(response.data);
            alert(response.data)
            setWallet(response.data);
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    const handleFetchProfile=async()=>{
        try {
            const response=await axios.get("http://localhost:8080/api/user/getProfile",{
                withCredentials:true
            })
            // console.log(response.data)
            // alert(response.data)
            setUser(response.data);
        } catch (error) {
           console.log(error)
           alert(error) 
        }
    }
    useEffect(() => {
        handleFetchProfile();
        handlefetchBalance();
    }, [])
    return (
        <div>
            <Navbar />
            <div className='mt-5 flex justify-around'>
                <div className='flex justify-center'>
                    <a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 w-3xl">
                        <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">


                            <div className="mt-4 sm:mt-0 flex justify-between w-full">
                                <div >
                                    <h3 className="uppercase text-lg font-medium text-pretty text-gray-900">
                                        {user.name}
                                    </h3>
                                    <p className="mt-1 text-lg text-gray-700">Mobile No: {user.phone}</p>
                                    <p className="mt-1 text-lg text-gray-700">Email: {user.email}</p>
                                </div>
                                {/* demo image i have added  */}
                                <div>
                                    <img class="size-20 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />

                                </div>

                            </div>
                        </div>


                    </a>
                </div>
                {/* ------- */}
                <div className='flex justify-center'>
                    <a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6 w-md">
                        <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">


                            <div className="mt-4 sm:mt-0 flex justify-between w-full">
                                <div >
                                    <h3 className="uppercase text-center text-lg font-medium text-pretty text-gray-900">
                                        Balance
                                    </h3>
                                    <p className="mt-1 text-lg text-gray-700">{'\u20B9'}{wallet.balance === null ? 0.0 : wallet.balance}</p>
                                </div>
                                <div>
                                    <img src={money} alt="" width={70} height={70} />
                                </div>

                            </div>
                        </div>


                    </a>
                </div>
            </div>
        </div>
    )
}

export default DashBoard