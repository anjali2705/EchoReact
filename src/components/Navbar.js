import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import Modal from 'react-modal';
import {Button, ButtonToolbar, ModalBody, ModalHeader, ModalTitle} from 'react-bootstrap';
import Login from './Login';
import {logout} from '../features/userSlice';
import Register from './Register';
import '../styleSheet/modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
export default function NavBar()  {

   const state = useSelector((state) => state.handleCart);
   const user = useSelector(selectUser);

   
   const dispatch = useDispatch();
  //Login
       const [modalIsOpen,setModalIsOpen] = useState(false);
       const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
        }
        const setModalIsOpenToFalse =()=>{
            setModalIsOpen(false)
        }

       //Register
       const [modalIsShow,setModalIsShow] = useState(false);
       const setModalIsShowToTrue =()=>{
        setModalIsShow(true)
        }
        const setModalIsShowToFalse =()=>{
            setModalIsShow(false)
        }

 
        function userLogout(){
         
          dispatch(logout());
        }
    return (
    <div><nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
    <div className="container">
      <NavLink className="navbar-brand fw-bold fs-4" to="/">
      <img src="./echo-logo.png" class="logo-image" alt="Echo-logo" height="40px" width="100px" />
        Echo</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About Us</NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
        {/* <div>
            <input className="mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success " type="submit"><i className='fa fa-search'></i></button>
          </div> */}
        <div className="buttons py-2">
         
     {user ? ( 
     
         <>  
             <h6>Welcome {user.name}</h6>
            <NavLink to="/cart" className='btn btn-outline-dark'> <i className="fa fa-shopping-cart ms-2"></i> Cart </NavLink>
            <NavLink to="/myorder" className='btn btn-outline-dark'> <i className="fa fa-shopping-bag ms-2"></i> My Order </NavLink>
             <button className='btn btn-outline-dark' onClick={userLogout}> <i className="fa fa-sign-out ms-2"></i> Logout </button>
            
         </>
         ) : 
        ( <>
             <button  className='btn btn-outline-dark' onClick={setModalIsOpenToTrue}> <i className="fa fa-sign-in ms-2"></i>Login</button>
            <Modal isOpen={modalIsOpen}>
                 <ModalHeader><button  onClick={setModalIsOpenToFalse}>x</button>
                    <ModalTitle>User Login</ModalTitle>
                 </ModalHeader>
                    <ModalBody> 
                        <Login/>
                    </ModalBody>

            </Modal>
            <button  className='btn btn-outline-dark' onClick={setModalIsShowToTrue}> <i className="fa fa-user-plus ms-2"></i>Register</button>
      
            <Modal isOpen={modalIsShow}>
                <ModalHeader><button  onClick={setModalIsShowToFalse} >x</button>
                    <ModalTitle>User Register</ModalTitle>
                </ModalHeader>
                    <ModalBody> 
                        <Register/>
                    </ModalBody>
            </Modal>
  
     </>)}
       
          
         
                
           
        </div>
      </div>
    </div>
  </nav></div>
  )
}

