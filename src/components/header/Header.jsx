import { Box, Modal } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../header/Header.css';
import Login from '../login/Login';
import cartPng from "../../images/parcel.png";

const styles = {
  position: 'absolute',
  top: '7%',
  left: '81.5%',
  transform: 'translate(-50%, 10%)',
  width: 200,
  height: 240,
  bgcolor: 'white',
  p: 2,
  sm: 600,
      md: 900,
      lg: 1200,
};

const giftStyles = {
  position: 'absolute',
  top: '13%',
  right: '25%',
  bgcolor: 'white',
  width: 350,
  height: 70,
}

const Header = ({size, setShow}) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [openDropdown, setDropdown] = useState(false);
  const [openGifts, setOpenGifts] = useState(false);

  const handleOpenDropdown = () => {
    setDropdown(true);
  }
  const handleCloseDropdown = () =>{
    setDropdown(false);
  }

  const handleGiftsOpened = () => {
    setOpenGifts(true);
  }

  const handleGiftsClosed = () => {
    setOpenGifts(false);
  }

    return(
      <nav className="navigation">
        <a href="/" className="brand-name">LIBRARIA KELMENDI</a>
        <button className="hamburger" onClick={() => {setIsMenuExpanded(!isMenuExpanded)}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={ isMenuExpanded ? "navigation-menu expanded" : "navigation-menu" }>
        <ul>
          <li>
            <Link onClick={()=>setShow(true)} to="/books">Libra të ndryshëm</Link>
          </li>
          <li>
            <a>Libra për fëmijë</a>
          </li>
          <li>
             <Link to="/tech-books">Informatikë</Link>
          </li>
          <li>
            <a onClick={handleGiftsOpened}>Aksesorë dhe dhurata</a>
              <Modal open={openGifts} onClose={handleGiftsClosed}>
                <Box sx={giftStyles}>
                  <ul className='d-flex gift-lists'>
                    <li><Link className='kio' to="/notepad" >Fletore</Link></li>
                    <li>Kufje</li>
                    <li>Ngjyra</li>
                  </ul>
                </Box>
              </Modal>
          </li>
          <li>
            <a>Evente</a>
          </li>
          <li>
              <a onClick={handleOpenDropdown}><b>Llogaria ime</b></a>
              <Modal open={openDropdown} onClose={handleCloseDropdown}>
                <Box sx={styles}>
                  <Link to="/register-form"><button className='btn btn-danger create-account'>Krijo një llogari</button></Link>
                  <h5 className='textAccount'>Lista e dëshirave</h5>
                  <Link className="cart-text" to="/my-cart"><h5 className='textAccount'>Shporta</h5></Link>
                  <h5><Login /></h5>
                </Box>
              </Modal>
          </li>
          <li>
            <a onClick={()=>setShow(false)}><img className='cartpng' src={cartPng} alt="cartPng" /></a>
            <span className='length-cart'>{size}</span>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default Header;