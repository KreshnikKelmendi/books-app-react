import React, { useState } from "react";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorsForm, setErrorsForm] = useState(false);
    const [login, setLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(name.length === 0 || email.length === 0 || password.length <=6) {
            setErrorsForm(true);
        }else{
            setErrorsForm(false);
        localStorage.setItem("Name", JSON.stringify(name));
        localStorage.setItem("Password", JSON.stringify(password));   

        console.log("Data Saved")
        setLogin(!login)
        }  
    }

    return(
     <>
        <div className='container-fluid'>
            <div className="col-12">
                <h2 className="text-center py-3">Register Form</h2>
                  <div className='col-12 text-center form-page'>
              {login ? (     
                    <form onSubmit={handleSubmit}>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder="Username" 
                            onChange={(e)=>setName(e.target.value)}
                           />
                        {errorsForm && name.length<=0?
                        <p className="errorForm">*Fullname is required</p>:''}
                        <input 
                            type='text' 
                            name='phone' 
                            placeholder='Phone Number' />
                       
                        <input 
                            type='email' 
                            name='email' 
                            placeholder="your@email.com" 
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        {errorsForm && email.length<=0?    
                        <p className="errorForm">*Email is required</p>:''}
                        <input 
                            type='password' 
                            name='password' 
                            placeholder="*********" 
                            onChange={(e)=>setPassword(e.target.value)}
                             />
                        {errorsForm && password.length <=6?
                        <p className="errorForm">*Password must have 6 characters !</p>:''}
                        <button type="submit" className="btn btn-dark">REGISTER NOW</button>
                    </form>
              ):(
                <p>Success</p>
              )}
                  </div> 
            </div>
        </div>
     </>
    )
}

export default Register;