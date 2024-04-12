import Keyboard from './Components/Keyboard.jsx';
import Screen from './Components/Screen';
import Cart from './Components/Cart.jsx';
import 'tailwindcss/tailwind.css';


const App = () => {

  return (
      <div className="app flex p-4">
          <div className="container p-2 m-2">
              <Screen/>
              <Keyboard/>
          </div>
          <div className="container p-2 m-2">
              <Cart/>
          </div>
      </div>
  );
};

export default App;
