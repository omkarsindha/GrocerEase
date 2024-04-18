import React, { useState } from 'react';
import axios from 'axios';

const Keyboard = () => {

    const [cart, setCart] = useState({
        cart: []
    });
    const [keyboardInput, setKeyboardInput] = useState({
        number: ''
    });

    const handleTotal = () => {};
    const handleDebitCredit = () => {};
    const handleCash = () => {};
    const handleCode = () => {
        axios.get(`http://localhost:8081/item/${keyboardInput.number}`)
            .then(response => {
                setCart(prevState => ({
                    ...prevState,
                    cart: [...prevState.cart, response.data]
                }));
                setKeyboardInput(prevState => ({
                    ...prevState,
                    number: prevState.number = response.data.shortName + " $" + response.data.price
                }));
            })
            .catch(error => {
                console.error("Error fetching item:", error);
            });
    };

    const handleAltPrice = () => {};
    const handleVoid = () => {};
    const handleWeight = () => {};
    const handleMfrCoupon = () => {};
    const handleEnter = () => {};
    const handleBackspace = () => {
        setKeyboardInput(prevState => ({
            ...prevState,
            number: prevState.number.slice(0, -1)
        }));
    };
    const handleClear = () => {
        setKeyboardInput(prevState => ({
            ...prevState,
            number: prevState.number = ''
        }));
    };
    const handleNumericButtonClick = (value) => { setKeyboardInput(prevState => ({
        ...prevState,
        number: prevState.number + value
    }));};

    return (
        <>
            <div className="bg-gray-800 text-white p-4 mt-4 rounded-lg">
                <p className="text-3xl h-8">{keyboardInput.number}</p>
            </div>
            <div className="grid grid-cols-6 grid-rows-5 gap-2 m-4 mx-18">
                <button className="bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-3xl col-span-2" onClick={handleTotal}>Total</button>
                <button className="bg-teal-400  text-gray-800 font-bold py-2 px-4 rounded-3xl  col-span-2" onClick={handleDebitCredit}>Debit/Credit</button>
                <button className="bg-teal-400  text-gray-800 font-bold py-2 px-4 rounded-3xl col-span-2" onClick={handleCash}>Cash</button>
                <button className="bg-blue-600  text-gray-800 font-bold py-2 px-4 rounded-3xl w-24 row-span-2" onClick={handleCode}>Code</button>
                <button className="bg-green-500  text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={() => handleNumericButtonClick(7)}>7</button>
                <button className="bg-green-500  text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={() => handleNumericButtonClick(8)}>8</button>
                <button className="bg-green-500  text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={() => handleNumericButtonClick(9)}>9</button>
                <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={handleAltPrice}>Alt Prc</button>
                <button className="bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={handleVoid}>Void</button>
                <button className="bg-green-500 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={() => handleNumericButtonClick(4)}>4</button>
                <button className="bg-green-500 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={() => handleNumericButtonClick(5)}>5</button>
                <button className="bg-green-500 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={() => handleNumericButtonClick(6)}>6</button>
                <button className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={handleWeight}>Weight</button>
                <button className="bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={handleMfrCoupon}>Mfr Cpn</button>
                <button className="bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24 row-span-2" onClick={handleEnter}>Enter</button>
                <button className="bg-green-500 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={() => handleNumericButtonClick(1)}>1</button>
                <button className="bg-green-500 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={() => handleNumericButtonClick(2)}>2</button>
                <button className="bg-green-500  text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={() => handleNumericButtonClick(3)}>3</button>
                <button className="bg-gray-900  text-gray-400 font-bold py-2 px-4 rounded-3xl w-24" onClick={handleBackspace}>Bck Spc</button>
                <button className="bg-red-600 text-gray-800 font-bold py-2 px-4 rounded-3xl w-24" onClick={handleClear}>Clear</button>
                <button className="bg-green-500  text-gray-800 font-bold py-2 px-4 rounded-3xl col-span-2" onClick={() => handleNumericButtonClick(0)}>0</button>
                <button className="bg-green-600  text-gray-800 font-bold py-2 px-4 rounded-3xl " onClick={() => handleNumericButtonClick("00")}>00</button>
            </div>
        </>
    );
};

export default Keyboard;
