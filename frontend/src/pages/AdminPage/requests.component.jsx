import React, { useEffect, useState } from "react";
import {useQuery, useMutation} from "@tanstack/react-query";
import newRequest from "../../utils/newRequest"

function Requests() {
  // Dummy data for the table

  const [requests,setRequests] = useState(null)

  const initialFormData = {
    username: "",
    email: "",
    requests: "",
    quantity: "",
  };

  const [formData, setFormData] = useState(initialFormData);


  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  
  useEffect(()=> {
    const fetchFunction = async () => {
      const res = await newRequest.get('/request').then((res)=>res.data)
      setRequests(res);
    }
    fetchFunction();
  },[])
  
  console.log(requests);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(initialFormData);
    await newRequest.post('/request',formData);
  };

  const data = [
    {
      id: 1,
      username: "JohnDoe",
      email: "johndoe@example.com",
      requests: "Item A",
      quantity: 2,
    },
    {
      id: 2,
      username: "JaneSmith",
      email: "janesmith@example.com",
      requests: "Item B",
      quantity: 1,
    },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <div className="border border-gray-300 rounded p-6">
        <div>
          <h2 className="text-center border-b pb-2 font-bold text-xl">
            Categories
          </h2>
          <table className="w-full table-fixed border-collapse border">
            <colgroup>
              <col className="w-1/6" /> {/* Column for Username */}
              <col className="w-1/4" /> {/* Column for Email */}
              <col className="w-1/2" /> {/* Column for Requests */}
              <col className="w-1/6" /> {/* Column for Quantity */}
              <col className="w-1/4" /> {/* Column for Buttons */}
            </colgroup>
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border-b border-r">Username</th>
                <th className="px-4 py-2 border-b border-r">Email</th>
                <th className="px-4 py-2 border-b border-r">Requests</th>
                <th className="px-4 py-2 border-b border-r">Quantity</th>
                <th className="px-4 py-2 border-b"></th>
              </tr>
            </thead>
            <tbody>
              {requests.map((category) => (
                <tr key={category.id} className="bg-white">
                  <td className="px-4 py-2 border-b border-r">
                    {category.username}
                  </td>
                  <td className="px-4 py-2 border-b border-r">
                    {category.email}
                  </td>
                  <td className="px-4 py-2 border-b border-r">
                    {category.request}
                  </td>
                  <td className="px-4 py-2 border-b border-r">
                    {category.quantity}
                  </td>
                  <td className="px-4 py-2 border-b flex justify-center">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2">
                      Accept
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 border border-gray-300 rounded p-6">
        <h2 className="text-center border-b pb-2 font-bold text-xl">
          Add Category
        </h2>
        <form onSubmit={handleSubmit} className="flex justify-center mt-4">
          <div className="flex items-center mb-4">
            <label htmlFor="username" className="mr-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1 rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="email" className="mr-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1 rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="requests" className="mr-2">
              Requests:
            </label>
            <input
              type="text"
              id="requests"
              name="requests"
              value={formData.requests}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1 rounded"
            />
          </div>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="border border-gray-300 px-2 py-1 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Requests;
