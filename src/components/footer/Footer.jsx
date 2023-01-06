import React from "react";
import '../footer/Footer.css';

const Footer = () => {
    return(
        <>
        <footer>
        <div className="content">
          <div className="left part">
            <div className="upper">
              <div className="title">LIBRARIA KELMENDI</div>
              <p>Qyteza “Pejton”, Pristina 10000</p>
            </div>
            <div className="lower">
              <div className="title ">Contact</div>
              <div className="phone">
                <a href="#"><i className="fas fa-phone-volume"></i>+383 44 99 99 99</a>
                
              </div>
              <div className="email">
                <a href="#"><i className="fas fa-envelope"></i>libraria@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="middle part">
            <div className="title ">Rreth nesh</div>
            <div><a href="#"></a>Rreth nesh</div>
            <div><a href="#"></a>Politika e privatësisë</div>
            <p className="text-secondary copyright">© 2022 Libraria Kelmendi. All Rights Reserved.</p>
          </div>
          <div className="right part">
            <div className="title ">Subscribe</div>
            
              <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            
          </div>
        </div>
       
      </footer>
    </>
    );
}

export default Footer;