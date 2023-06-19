import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Cart = () => {
  const { data } = useContext(CartContext);

  const handleRemove = (itemId) => {
    // Implement the remove logic for the item with the given ID
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="p-5">
      <div className="bg-gray-200 p-4 mb-5 h-[180px] flex justify-center items-center">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>
      <div className="flex">
        <div className="w-9/12 pr-4">
          <div className="border border-gray-300 rounded p-4">
            <h2 className="text-xl font-bold">Cart Items</h2>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th style={{ width: "40%", textAlign: "left" }}>Product</th>
                  <th style={{ width: "20%", textAlign: "left" }}>Quantity</th>
                  <th style={{ width: "20%", textAlign: "left" }}>Price</th>
                  <th style={{ width: "20%", textAlign: "left" }}></th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data?.map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      
                      <td className="flex items-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-25 h-24 mr-2"
                        />
                        {item.title}
                      </td>
                      
                      <td>
                        <div className="flex items-center">
                          <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded-l"
                            onClick={() => console.log("Decrease quantity")}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded-r"
                            onClick={() => console.log("Increase quantity")}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-3/12 pl-4">
          <div className="border border-gray-300 rounded p-4">
            <h2 className="text-xl font-bold">Other Details</h2>
            {/* Add other details or components as needed */}
          </div>
          <div className="border border-gray-300 rounded p-4 mt-4">
            <h2 className="text-xl font-bold">Summary</h2>
            <div className="flex justify-between mt-4">
              <div>Total Price:</div>
              <div>$100</div>
            </div>
            <div className="flex justify-between mt-2">
              <div>Discount:</div>
              <div>$10</div>
            </div>
            <div className="flex justify-between mt-2">
              <div>Total:</div>
              <div>$90</div>
            </div>
            <div className="border-t mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
