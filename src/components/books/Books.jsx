import React, { useState } from "react";
import {data} from "../../data/data";
//import favoritePhoto from "../../images/love.png";
import Cards from "./Cards";



const Books = ({handleClick}) => {
    

    return(
        <>
        <section>
          {
            data?.map((item)=>(
              <Cards item={item} handleClick={handleClick} key={item.id}/>
            ))
          }
        </section>
        </>
    );
}

export default Books;