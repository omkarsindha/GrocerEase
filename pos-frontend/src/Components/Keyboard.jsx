import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cart from "./Cart";

const Keyboard = ({addToCart}) => {

    const [screen, setScreen] = useState({
        screenText: '',
        input: '',
        error: '',
        product: '',
        state: ''
    });

    const [keyboardInput, setKeyboardInput] = useState({
        number: '',
        weight: '',
        isWeight: false,
        itemVoid: '',
        isItemVoid: false,
        alternatePrice: '',
        isAlternate: false,
    });

    useEffect(() => {
        console.log(screen)
        switch (screen.state) {
            case 'input':
                let alternateText = ''
                let weightText = ''
                let voidText = ''
                if(keyboardInput.isAlternate){
                    alternateText = ' a'+keyboardInput.alternatePrice+ ' '
                }
                if(keyboardInput.isWeight){
                    weightText = ' w'+keyboardInput.weight+ ' '
                }
                if (keyboardInput.isItemVoid){
                    voidText = 'v '
                }
                setScreen(prevState => ({
                    ...prevState,
                    input: voidText + weightText + alternateText + keyboardInput.number,
                    screenText: voidText + weightText + alternateText + keyboardInput.number
                }));
                break;
            case 'error':
                setScreen(prevState => ({
                    ...prevState,
                    screenText: screen.error
                }));
                break;
            case 'product':
                setScreen(prevState => ({
                    ...prevState,
                    screenText: screen.product
                }));
                break;
            default:
                break;
        }
    }, [screen.state, screen.product, screen.error, keyboardInput.itemVoid, keyboardInput.weight, keyboardInput.alternatePrice, keyboardInput.number]);

    const handleWeight = () => {
        setKeyboardInput(prevState => ({
            ...prevState,
            weight: (parseFloat(prevState.number) / 1000).toFixed(3),
            isWeight: true,
            number: ''
        }))
        setScreen(prevState => ({
            ...prevState,
            state: 'input'
        }))
    };

    const handleAltPrice = () =>  {
        setKeyboardInput(prevState => ({
            ...prevState,
            alternatePrice: (parseFloat(prevState.number) / 100).toFixed(2),
            isAlternate: true,
            number: ''
        }))
        setScreen(prevState => ({
            ...prevState,
            state: 'input'
        }))
    };

    const handleVoid = () => {
        setKeyboardInput(prevState => ({
            ...prevState,
            itemVoid: ' v ',
            isItemVoid: true,
            number: ''
        }))
        setScreen(prevState => ({
            ...prevState,
            state: 'input'
        }))
    };

    const handleNumericButtonClick = (value) => {
        setKeyboardInput(prevState => ({
            ...prevState,
            number: prevState.number + value,
        }));
        setScreen(prevState => ({
            ...prevState,
            state: 'input'
        }));
    };

    const handleCode = () => {
        let cartItem = {}
            axios.get(`http://localhost:8081/item/${keyboardInput.number}`)
                .then(response => {
                    cartItem.itemCode = response.data.itemCode;

                    //checking if the item price is alternated
                    if(keyboardInput.isAlternate){
                        cartItem.price = keyboardInput.alternatePrice
                    }else{
                        cartItem.price = response.data.price;
                    }
                    //checking if item is weighted
                    if(response.data.sellType === "weight"){
                        if(!keyboardInput.isWeight){
                            console.log("hi")
                            setScreen(prevState => ({
                                ...prevState,
                                state: 'error',
                                error: 'no weight'
                            }));
                            resetKeyboardToDefault()
                            return
                        }
                        else{
                            cartItem.weight = keyboardInput.weight
                            cartItem.sellPrice = (cartItem.price * cartItem.weight).toFixed(2);
                        }
                    }else{
                        cartItem.weight = 'NA'
                        cartItem.sellPrice = cartItem.price
                    }
                    cartItem.name = response.data.name

                    addToCart(cartItem);
                    resetKeyboardToDefault()
                    setScreen(prevState => ({
                        ...prevState,
                        state: 'product',
                        product: prevState.product = response.data.shortName + ' $' + cartItem.sellPrice,
                    }));
                }).catch(error => {
                setScreen(prevState => ({
                    ...prevState,
                    state: 'error',
                    error: 'Item not found'
                }));
            });
    };

    const handleBackspace = () => {
        setKeyboardInput(prevState => ({
            ...prevState,
            number: prevState.number.slice(0, -1)
        }));
    };

    const handleClear = () => {
        resetKeyboardToDefault()
    };

    const resetKeyboardToDefault = () => {
        setKeyboardInput({
            number: '',
            weight: '',
            isWeight: false,
            itemVoid: '',
            isItemVoid: false,
            alternatePrice: '',
            isAlternate: false,
        })
    }



    const handleMfrCoupon = () => {};
    const handleEnter = () => {};
    const handleTotal = () => {};
    const handleDebitCredit = () => {};
    const handleCash = () => {};

    return (
        <>
            <div className="bg-gray-800 text-white p-4 mt-4 rounded-lg">
                <p className="text-3xl h-8">{screen.screenText}</p>
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
