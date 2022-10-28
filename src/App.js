import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { HomePage } from "./Components/HomePage";
import Footer from "./Foot/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import {Navbar} from "./Components/Navbar"
function App() {
  return (
    <div className="App">
 
      {/* <Signup/> */}

      <Navbar/>
      <Routes>

        <Route path="/" element={     <HomePage/>} />
        
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/product" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
