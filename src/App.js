import "./App.css";
import Header from "./component/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Cart from "./component/cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;