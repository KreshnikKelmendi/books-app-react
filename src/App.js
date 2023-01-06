import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import AllBooksPage from "./pages/AllBooksPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import BooksPage from "./pages/BooksPage";
import NotepadBooks from "./pages/NotepadBooks";
import ScrollToTop from "react-scroll-to-top";
import TechBooks from "./pages/TechBooks";
import CartPage from "./pages/CartPage";

//import SinglePage from "./pages/SinglePage";

function App() {
  
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/register-form" element={<RegisterPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/notepad" element={<NotepadBooks />} />
          <Route path="/tech-books" element={<TechBooks />} />
          <Route path="/my-cart" element={<CartPage />} />
          {/*<Route path="/all-books" element={<AllBooksPage />} />
          <Route path="/all-books/:booksID" element={<SinglePage />} />*/}
        </Routes>
      </BrowserRouter>
      <ScrollToTop smooth />
    </>
  );
    
}

export default App;
