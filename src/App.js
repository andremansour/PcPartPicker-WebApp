import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Home.js";
import Cart from "../src/Cart.js";
import { CartProvider } from "react-use-cart";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
      <>
      <BrowserRouter>
        <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <Link to="/user/pcbuild">Andre's Pc Builder</Link>
              </div>
              </nav>
              <nav className="navbar navbar-black bg-light">
              <div className="container-fluid">
                  <span className="navbar-brand mb-0 h1"></span>
              </div>
        </nav>
          <Routes>
            <Route 
              path="user/pcbuild" 
              element={
              <CartProvider>
                <Home/>
                <Cart/>
                </CartProvider>
              }>
            </Route>
          </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
