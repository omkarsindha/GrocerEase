import React from 'react';
import './cart-style.css'
const Cart = ({cartItems}) => {

    return (
        <div className="bg-gray-800 rounded-lg mt-4 overflow-hidden">
            <div className="cart overflow-y-auto rounded-lg shadow-md p-3">
                {cartItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-3 m-3">
                        {item.weight !== 'NA' ? (
                            <>
                                <div className="flex">
                                    <p className="text-lg mr-4">{item.itemCode}</p>
                                    <p className="text-lg">{item.name}</p>
                                </div>
                                <div className="flex">
                                    <p className="text-lg w-20">{item.weight}</p>
                                    <p className="text-lg">{item.price}</p>
                                </div>
                                <p className="text-lg">{item.sellPrice }</p>
                            </>
                        ) : (
                            <>
                                <div className="flex">
                                    <p className="text-lg mr-4">{item.itemCode}</p>
                                    <p className="text-lg">{item.name}</p>
                                </div>
                                <p className="text-lg">{item.price}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;


