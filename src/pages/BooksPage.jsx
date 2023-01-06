import { Alert } from "@mui/material";
import React from "react";
import { useState } from "react";
import Books from "../components/books/Books";
import Cart from "../components/books/Cart";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const styleAlert = {
    position: "fixed",
    top:"90%",
    left: "5%",
    borderRadius: "8px",
}


const BooksPage = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [errorAdd, setErrorAdd] = useState(false);

    const handleClick = (item) => {
        let inCart = false;
        cart.forEach((element) => {
            if (item.id === element.id)
            inCart = true;
        })
        if(inCart){
            setErrorAdd(true);
            setTimeout(()=>{
                setErrorAdd(false);
            },3000);
            return;
        }
        setCart([...cart, item]);
        console.log(item);
    }
    return(
        <>
        <Header size={cart.length} setShow={setShow} />
        {
            show? <Books handleClick={handleClick}/>: <Cart cart={cart} setCart={setCart} />
        }
        
        {
            errorAdd && <Alert sx={styleAlert} variant="filled" severity="info">
            Ky libër është shtuar në shportë !
          </Alert>
        }
        <div className="books-footer"> <Footer /></div>
      
        </>
    );
}

export default BooksPage;