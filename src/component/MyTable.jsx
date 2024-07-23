import React from 'react'
import useSWR from 'swr';

const MyTable = ({ data }) => {
    
  return (
    <div className="container mx-auto p-4">
    <table className="min-w-full bg-white border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b text-left">Name</th>
          <th className="py-2 px-4 border-b text-left">Function</th>
          <th className="py-2 px-4 border-b text-left">Review</th>
          <th className="py-2 px-4 border-b text-left">Email</th>
        </tr>
      </thead>
      <tbody>
          {data.map((item) => (
            <tr className='border-b' key={item.id}>
              <td className="py-2 px-4  flex items-center space-x-2">
                <img
                  src="https://plus.unsplash.com/premium_photo-1720760950942-e0d10c0a7134?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                <p className="m-0">{item.name}</p>
              </td>
              <td className="py-2 px-4  text-left">{item.function}</td>
              <td className="py-2 px-4  text-left flex items-center space-x-2">
              <div className="flex items-center justify-center gap-2 space-x-1">
                  <span className={`w-4 flex items-center justify-center h-4 rounded-full ${item.review === 'positive' ? 'bg-green-500' : item.review === 'negative' ? 'bg-red-500' : 'bg-gray-200'}`}></span>
                  <span className="mr-2">{item.review}</span>
                </div>
                
               
              </td>
              <td className="py-2 px-4  text-left bg-white">{item.email}</td>
            </tr>
          ))}
        </tbody>
    </table>
  </div>
  )
}

export default MyTable