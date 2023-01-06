import React from "react";
import favoritePhoto from "../../images/love.png";

const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
    return(
        <>
         <div className="col-12 col-md-6 col-lg-3 full-card">
         <div className="card d-flex h-100">
          <img className="card-img-top cardImg" src={item.img} alt={item.title} title={item.title}/>
            <div className="card-body b-card">
              <img className="love-photo" src={favoritePhoto} alt="favPhoto" />
              <h5 className="card-title text-dark">{item.title}</h5>
              <h5 className="text-danger">{item.author}</h5>
              <h5 className="card-title card-price">{item.price} €</h5>
              <button onClick={()=>handleClick(item)} className="btn btn-danger cart-button">Shto në shportë</button>
           </div>
      </div>
      </div> 
        </>
    );
}

export default Cards;