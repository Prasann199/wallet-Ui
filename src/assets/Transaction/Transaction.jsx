import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';

const Transaction = () => {

    const [transactions,setTransactions]=useState([]);
    const fetchTransactions=async()=>{
        try {
            const response=await axios.get("http://localhost:8080/api/transaction/TransactionsByUser",{withCredentials:true})
            console.log(response.data);
            alert(response.data)
            setTransactions(response.data)
        } catch (error) {
            console.log(error);
            alert(error)
        }
    }
    useEffect(()=>{
        fetchTransactions()
    },[])
  return (
    <div>
        <Navbar />
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-md">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">Transaction Id</th>
					<th className="p-3">User Id</th>
					<th className="p-3">Transaction Type</th>
					<th className="p-3">Issued Date</th>
					<th className="p-3 text-right">Amount</th>
				</tr>
			</thead>
			<tbody>
                {transactions.map((transaction,idx)=>(
                    <tr key={idx} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>{transaction.id}</p>
					</td>
					<td className="p-3">
						<p>{transaction.userId}</p>
					</td>
					<td className="p-3">
						<p>{transaction.type}</p>
					</td>
					<td className="p-3">
						<p>{transaction.timestamp}</p>
						
					</td>
					<td className="p-3 text-right">
                        {transaction.type==="credit"?<p className='text-green-600 font-semibold'>+{transaction.amount}{'\u20B9'}</p>:
						<p className='text-red-500 font-semibold'>-{transaction.amount}{'\u20B9'}</p>}
					</td>
					
				</tr>
                ))}
				
				
			</tbody>
		</table>
	</div>
</div>
    </div>
    
  )
}

export default Transaction