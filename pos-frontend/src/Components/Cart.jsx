import React from 'react';

const Cart = ({ items }) => {
  return (
      <div className="container mx-auto px-4 py-8">
          <div className="cart">
              <h2 className="text-2xl font-bold mb-4">Cart</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold mb-2">Item by Each</h3>
                      <p>Name: Product A</p>
                      <p>Price: $10.00</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold mb-2">Item by Weight</h3>
                      <p>Name: Product B</p>
                      <p>Price per pound: $5.00</p>
                      <p>Weight: 2 lbs</p>
                      <p>Total Price: $10.00</p>
                  </div>
              </div>
          </div>
      </div>

  );
};

export default Cart;
