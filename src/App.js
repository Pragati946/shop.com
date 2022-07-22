import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Signup from "./Pages/Signup"
import {HomePage} from "./Components/HomePage"
import {
  HomeGifSlider,
  HomeGifSlider2,
} from "./Carousel/HomeImageSlider";
import Carousel from "./Carousel/Carousel"
import Footer from "./Foot/Footer"

function App() {
  return (
    <div className="App">
      <HomePage/>
      {/* <Signup/> */}
      <Routes>
        <Route to="/Signup" element={<Signup/>}>
        </Route>
      </Routes>
    <HomeGifSlider/>
    <HomeGifSlider2/>
   <Footer/>
    </div>
 
  );
}

export default App;
