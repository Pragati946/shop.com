import React, { useState } from "react";
import "./HomeImageSlider.css";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Carousel from "react-bootstrap/Carousel";

const firstSlider = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4B3-Ingredient_3.png?v=1655367223",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4D-Ingredient_2c86db10-ce47-4ff7-9792-2ebf0192e29e.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4C-Ingredient_142737df-d244-4493-baaa-5395de309f36.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4A-Ingredient_42a381db-522d-4386-9d1d-64f1a985b92b.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4F-Ingredient_73eaecaf-da67-4a0a-8884-ab3215f5d1ce.jpg?v=1655367539",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/4E-Ingredient_9f9c8a93-1d51-499f-bb3f-c285b0c6345a.jpg?v=1655367539",
];

const secondImageSlider = [
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/glow_3.jpg?v=1652438348",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/moist.jpg?v=1652438356",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/acne_3_7d4b5389-228e-42ce-9008-0454cff9e3d2.jpg?v=1652438447",
  "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum.jpg?v=1652438356",
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <MdArrowBackIos />
    </div>
  );
};

const HomeImageSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="imagesliderparentbox">
      <Slider {...settings}>
        {firstSlider.map((item, i) => (
          <div
            key={i}
            className={
              i === imageIndex
                ? "FirstImageSlider myactiveImageSlider"
                : "FirstImageSlider"
            }
          >
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const HomeImageSecondSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="imagesliderparentbox">
      <Slider {...settings}>
        {secondImageSlider.map((item, i) => (
          <div
            key={i}
            className={
              i === imageIndex
                ? "SecondImageSlider myactiveImageSlider"
                : "SecondImageSlider"
            }
          >
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const gifsliderData = [
  {
    image:
      "https://img.shop.com/Image/homepage/shop-usa-aus-can-84533-clothing-dept-page-banners-1600x300-img-v11602194297622.jpg",
    heading: "Joie Womens Summer Short Mini Dress",
    subheading: "Sold by BHFO",
    paragraph:
      "We believe in delhighfully safe, suprisingly gemtle and unquestionably effective skincare products that are free from nasty chemicals.",
  },
  {
    image:
      "https://img.shop.com/Image/homepage/shop-us-53701-trends-evergreen-banner-1600.3001514914243819.jpg",
    heading: "Michael Kors Jet Set Travel Medium Dome Crossbody Bag",
    subheading: "PROMISE",
    paragraph:
      "We believe in delhighfully safe, suprisingly gemtle and unquestionably effective skincare products that are free from nasty chemicals.",
  },
];
const gifsliderData2 = [
  {
    image:
      "https://www.shop.com/feo-cdn/X/C/Rz7xS6UKI.webp",
    heading: "Joie Womens Summer Short Mini Dress",
    subheading: "Sold by BHFO",
    paragraph:
      "We believe in delhighfully safe, suprisingly gemtle and unquestionably effective skincare products that are free from nasty chemicals.",
  },
  {
    image:
      "https://www.shop.com/feo-cdn/Z/X/nQYXkVzY8.jpg",
    heading: "Michael Kors Jet Set Travel Medium Dome Crossbody Bag",
    subheading: "PROMISE",
    paragraph:
      "We believe in delhighfully safe, suprisingly gemtle and unquestionably effective skincare products that are free from nasty chemicals.",
  },
];

const HomeGifSlider = () => {

  return (
    <Carousel variant="dark" className=" gifsliderparentbox" interval={null}>
      {gifsliderData.map((item, i) => (
        <Carousel.Item className="gifSlider" key={i}>
          <div className="gifSliderBox1">
            <h2>{item.heading}</h2>
            <p>{item.subheading}</p>
            <p>{item.paragraph}</p>
          </div>
          <div className="gifSliderBox2">
            <img src={item.image} alt="" />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>

  );
};
const HomeGifSlider2 = () => {

  return (
    <Carousel variant="dark" className=" gifsliderparentbox" interval={null}>
      {gifsliderData2.map((item, i) => (
        <Carousel.Item className="gifSlider" key={i}>
          <div className="gifSliderBox1">
            <h2>{item.heading}</h2>
            <p>{item.subheading}</p>
            <p>{item.paragraph}</p>
          </div>
          <div className="gifSliderBox2">
            <img src={item.image} alt="" />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    
  );
};
export { HomeImageSlider, HomeImageSecondSlider, HomeGifSlider,HomeGifSlider2};
