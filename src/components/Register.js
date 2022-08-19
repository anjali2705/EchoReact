import React , {useState, useEffect}from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {registeruser} from '../features/userSlice';
import { useDispatch, useSelector} from "react-redux";
import '../styleSheet/modal.css';
import {  toast } from 'react-toastify';
export default function Register() {

    const navigate = useNavigate();
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
   
    const [nameError, setNameError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [passwordError, setPasswordError] = useState("");
     const [emailError, setEmailError] = useState("");

    const dispatch = useDispatch();
      

    function validate() {
      const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      if(!name){
        setNameError("Name is required");
        return false;
      }
      else if(!email){
         setEmailError("Email Is required");
         return false;
      }
       else if(!password){
       setPasswordError("Password is required");
       return false;
       }
       else if(!mobile){
         setMobileError("Mobile is required");
         return false;
       }
       else if(!address){
         setAddressError("Address is required");
         return false;
       }
     else {
      userRegister();
     }

}

       function userRegister(){
         console.log("register method");
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': 'https://localhost:3000',
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type"
              }
            }

        let item = {address, email,mobile,name, password};
        console.log(address, email);
        axios.post('http://localhost:8080/api/registeruser',item , config)
        .then(res => {
          if(res.data){
            toast.success("User Registered Successfully");
              dispatch(registeruser({
                  name: res.data.name,
                  email:email
              }))
              navigate('/');
        } else{
             toast.warning("User Already Registered");
        }
       }, (error) =>{
              console.log("Warning");
              toast.warning('User Already Exist');
        })
       }
    

        return (
                
                    <div className='col-sm-6 offset-sm-3'>
                     <h6>Name:</h6>
                    <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' required/>
                     <p className='error'>{nameError}</p>
                   
                    <h6>Email:</h6>
                    <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' required/>
                    <p className='error'>{emailError}</p>
                  
                    <h6>Mobile:</h6>
                    <input type="text" placeholder='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} className='form-control' required/>
                    <p className='error'>{mobileError}</p>
                   
                    <h6>Address:</h6>
                    <input type="textarea" placeholder='address' value={address} onChange={(e)=>setAddress(e.target.value)} className='form-control' required/>
                     <p className='error'>{addressError}</p>
    
                    <h6>Password:</h6>
                    <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' required/>
                    <p className='error'>{passwordError}</p>
                    <br></br>
                    <button type="submit" className='btn btn-primary' onClick={validate}>Register</button>
        </div>
   
        )
}
