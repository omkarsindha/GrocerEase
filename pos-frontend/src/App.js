import Keyboard from './Components/Keyboard.jsx';
import Screen from './Components/Screen';
import Cart from './Components/Cart.jsx';
import 'tailwindcss/tailwind.css';


const App = () => {

  return (
    <div className="app">
      <div className="pos-container">
        <Keyboard />
        <Screen />
        <Cart />
      </div>
    </div>
  );
};

export default App;
