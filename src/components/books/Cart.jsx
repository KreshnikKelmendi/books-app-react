import React, { useState } from "react";
import { useEffect } from "react";
import deleteCart from "../../images/recycle-bin.png";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleDelete = (id) => {
    const arr = cart.filter((item)=>item.id !== id);
    setCart(arr);
  }

  const handleDecrement = () => {
    if(quantity > 1){
      setQuantity(prevCount =>prevCount -1)
    }
  }

  const handleIncrement = () => {
    if(quantity < 5){
      setQuantity(prevCount =>prevCount +1)
    }
  }
  
   return(
    
     <article>
      {
        cart?.map((item) => (
          <div className="cart-bag">
          <div className="card-full">
           <img className=" cardImg-cart" src={item.img} alt={item.title} title={item.title}/>
             <div className="description-cart">
               <h5 className="title-cart">{item.title}</h5>
               <h5 className="text-danger">{item.author}</h5>
               <h5 className="price-cart">{item.price} €</h5>
               <div className="buttons-full">
               <button onClick={()=>handleDecrement(item)} className="btn btn-light btn-sm btn-cart">-</button>
               <span className='btn-quantity'>{quantity}</span>
               <button onClick={handleIncrement} className="btn btn-light btn-sm btn-cart">+</button>
               </div>
               <img onClick={()=>handleDelete(item.id)} className="delete-cart" src={deleteCart} alt="delete" />
               
            </div>
       </div>
       </div> 
        ))
      }
      
        <div className="total-cart">
          <h3>Përmbledhje</h3>
          <div className="d-flex grand-total">
          <h6 className="text-success py-2">Totali</h6>
              <h3>
                {cart.map(item=>item.price).reduce((total,value)=>total+value,0)} €
              </h3>
              </div>
              <button className="btn btn-danger btnCheck">Checkout</button>
            </div>
     </article>
    
   )
}   

export default Cart;