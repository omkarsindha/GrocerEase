import Keyboard from './Components/Keyboard.jsx';
import Cart from './Components/Cart.jsx';
import 'tailwindcss/tailwind.css';


const App = () => {
  return (
      <div className="app flex">
          <div className="container p-2 m-2">
              <Keyboard/>
          </div>
          <div className="container p-2 m-2">
              <Cart/>
          </div>
      </div>
  );
};

export default App;
