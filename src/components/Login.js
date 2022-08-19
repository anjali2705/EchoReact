import React , {Component, useState, useEffect}from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector} from "react-redux";
import Navbar from './Navbar';
import {login} from '../features/userSlice';
import '../styleSheet/login.css';
import {  toast } from 'react-toastify';

export default function Login() {
      
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
    const [name,setName] = useState("");
    const [id,setId] = useState("");
    const [address,setAddress] = useState("");
    const [emailError, setEmailError] = useState("");
    const  [passwordError, setPasswordError] =  useState("");
    const dispatch = useDispatch();
  
     const validate= () =>{
          let emailError= "";
           const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          console.log(email);
          if(!email){
            setEmailError("Email is required");
            return false;
          }
       
          else if(!password){
            setPasswordError("Password is required");
            return false;
          }
          else if(password.length < 0  || password.length > 12){
            setPasswordError("Password length should be less than 12");
            return false;
          }
          else{
            userLogin();
          }

    }

     function userLogin(){
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': 'https://localhost:3000',
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type"
              }
            }

        let item = {email, password};
        axios.post('http://localhost:8080/api/login',item , config)
        .then((res) => {
            if(res.data){
              console.log(res.data );
              toast.success('Login Successfully');
                      dispatch(login(
                      {
                        id: res.data.id,
                        name:res.data.name,
                        type:res.data.type ,
                        address: res.data.address,
                        email: email,
                        password: password,   
                        loggedIn : true
                    }
               ));
            }else{
               toast.warning('Invalid User Detail');
            }
        }, (error) =>{
              console.log("Warning");
              toast.warning('Invalid User Detail');
        })
      }
    
        return (

                 <>
                    <div className='col-sm-6 offset-sm-3'>
                    <h6>Email:</h6>
                    <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
                     <p className='error'>{emailError}</p>
                    <br></br>
                    <h6>Password:</h6>
                    <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
                     <p className='error'>{passwordError}</p>
                    <br></br>
                    <button type="submit" className='btn btn-primary' onClick={validate}>Login</button>
                    <br></br>
                    <br></br>
                    <p>Not Registered?<Link className='btn btn-primary' to="register">Register</Link></p>
                     </div>
                     </>
        )

          
}
