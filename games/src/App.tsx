import { useState } from "react";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);

  return (
    <div>
      <h1>Example 2</h1>
      <NavBar cartItemsCount = {cartItems.length}></NavBar>
      <Cart cartItems = {cartItems} onClear={() => setCartItems([])}></Cart>
    </div>
  );
}

export default App;