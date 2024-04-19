import Keyboard from './Components/Keyboard.jsx';
import Cart from './Components/Cart.jsx';
import 'tailwindcss/tailwind.css';
import {useState} from "react";
import cart from "./Components/Cart.jsx";


const App = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
    };
      return (
          <div className="app flex">
              <div className="container p-2 m-2">
                  <Keyboard addToCart={addToCart} />
              </div>
              <div className="container p-2 m-2">
                  <Cart cartItems={cartItems}/>
              </div>
          </div>
      );
};

export default App;
