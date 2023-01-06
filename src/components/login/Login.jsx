import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Alert } from '@mui/material';
import showPng from "../../images/show.png";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  height: 450,
  bgcolor: 'background.paper',
  border: '2px solid black',
  boxShadow: '3px 3px black',
  p: 4,
  btn:{
    marginLeft: '33%',
    marginTop: '20%',
   btn2:{ 
    marginTop: '19%',
  }
  }
};

const alertStyle = {
  marginTop: '3px',
  fontSize: '12px',
  borderRadius: '8px',
  backgroundColor: 'brown',
};


const Login = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);
  const [successLogin, setSuccessLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let yourName = localStorage.getItem("Name").replace(/"/g,"");
    let yourPass = localStorage.getItem("Password").replace(/"/g,"");

    console.log(name+pass);

     if (!name || !pass){
    setErrorLogin(true);
      console.log("Empty Field")
  } else if(pass !== yourPass || name !== yourName ){
    setErrorLogin(true);
  } else {
    setSuccessLogin(!successLogin)
    setErrorLogin(false);
  }
}

 
  const handleOpenModal = () => {
     setOpenModal(true);
  }
  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <div>
      <h5 className='textAccount' onClick={handleOpenModal}>Kyçu</h5>
      {successLogin?(
       <Modal open={openModal}>
        <Box sx={style} className='modInput'>
         <h3 className='text-secondary text-center'>LOGIN</h3>
         <form onSubmit={handleSubmit}>
          <label htmlFor='name'><span className="material-symbols-outlined">person</span></label>
          <input value={name} onChange={(e)=>setName(e.target.value)} type='name' id='name' name='name' placeholder='Username'/>
          <label htmlFor='pass'><span class="material-symbols-outlined">lock</span></label>
          <input value={pass} onChange={(e)=>setPass(e.target.value)} type={showPassword ? 'text':'password'} placeholder="Password" id='pass' name='pass'/>
          <img className='showPass' src={showPng} onClick={() => setShowPassword(!showPassword)} alt="showPassword" />
          <p className='closeModal' onClick={handleCloseModal}>X</p>
          {errorLogin && (
             <Alert sx={alertStyle} variant='filled' severity='error'>Not Correct Username or Password. Please Check them !</Alert> )}
          <Button type='submit' sx={style.btn.btn2} variant='contained'>Sign in</Button>
          <Button sx={style.btn} variant='outlined'><Link to="/register-form">REGISTER</Link></Button>
          <p className='text-account'>You need to have an account to sign in !</p>
         </form>
        </Box>
      </Modal>
      ):(
        <p className='text-danger textAccount'>{name}</p>
      )}
    </div>
  );
}

export default Login;