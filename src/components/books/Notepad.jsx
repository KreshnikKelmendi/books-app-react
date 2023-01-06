import React from "react";
import favoritePhoto from "../../images/love.png";
import homePng from "../../images/home.png";
import { notebookData } from "../../data/data";
import { NavLink } from "react-router-dom";

const Notepad = () => {
    return(
        <>
        <div className="col-12 col-md-5 col-lg-3 d-flex under-header">
            <NavLink to="/"><img src={homePng} alt="homePng" /></NavLink>
             <b className="bold">|</b>
             <span>Aksesorë dhe dhurata</span>
             <b className="bold">|</b>
             <span>Fletore</span>
        </div>
          {notebookData?.map((element)=>(
        <div className="col-12 col-md-6 col-lg-3 full-card">
         <div className="card d-flex h-100">
          <img className="card-img-top cardImg" src={element.img} alt={element.title} title={element.title}/>
            <div className="card-body b-card">
              <img className="love-photo" src={favoritePhoto} alt="favPhoto" />
              <h5 className="card-title text-warning">{element.title}</h5>
              <h5 className="card-title card-price">{element.price} €</h5>
              <button className="btn btn-danger cart-button">Shto në shportë</button>
           </div>
      </div>
      </div> 
       ))}   
        </>
    );
}

export default Notepad;