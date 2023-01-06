import React from "react";
import { Link } from "react-router-dom";
import '../container/Container.css';
import { Slide } from 'react-slideshow-image';
import favoritePhoto from "../../images/love.png";
import redArrow from "../../images/redArrow.png";
import 'react-slideshow-image/dist/styles.css';
import firstImage from "../../images/hwallpaper.jpg";
import secondImage from "../../images/dwallpaper.jpg";
import thirdImage from "../../images/2wallpaper.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { recommendation } from "../../data/data";


const fadeImages = [
  {url: firstImage,},
  {url: secondImage,},
  {url: thirdImage}
  
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

const Container = () => {
    return(
        <>
        <div className="col-12 slide-container">
        <Slide>
          {fadeImages.map((fadeImages, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img className='img-fluid display-photo' src={fadeImages.url} alt="slide" />
              </div>
            </div>
          ))}
        </Slide>
        </div>

        <div className="container d-flex containerElement">
          <h2 className="col-6">Rekomandimet për muajt në vijim</h2>
          <Link className="more-to-show" to="/books">MORE<img className="redArrow" src={redArrow} alt="..." /></Link>
        </div>

        <Carousel responsive={responsive}>
            {recommendation?.map((element)=>(
              <div className="card d-flex jut" key={element.id}>
                <img className="card-img-top cardImg" src={element.img} alt={element.title} title={element.title}/>
                  <div className="card-body b-card">
                    <img className="love-photo" src={favoritePhoto} alt="favPhoto" />
                    <h5 className="card-title text-dark">{element.title}</h5>
                    <h5 className="card-title text-danger">{element.author}</h5>
                    <h5 className="card-title card-price">{element.price} €</h5>
                    <button className="btn btn-danger cart-button">Shto në shportë</button>
                  </div>
              </div>
            ))}
         </Carousel> 
        </>
    );
}

export default Container;