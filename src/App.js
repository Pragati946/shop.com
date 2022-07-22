import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Signup from "./Pages/Signup"
import {HomePage} from "./Components/HomePage"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

import {
  HomeGifSlider,
  HomeGifSlider2,
} from "./Carousel/HomeImageSlider";
import Carousel from "./Carousel/Carousel"
import Footer from "./Foot/Footer"

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <Signup/> */}
      <Routes>
        <Route to="/Signup" element={<Signup/>}>
        </Route>
        {/* <Header /> */}
        {/* <Switch> */}
          {/* <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route> */}
        {/* </Switch> */}
      </Routes>
    
   <Footer/>
    </div>
 
  );
}

export default App;
