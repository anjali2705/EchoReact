import React from 'react';
import {NavLink} from 'react-router-dom';
export default function Thankyou() {
  return (
    <div>
        <div className="container">
                Thankyou
            <NavLink to="/myorder" className='btn btn-outline-dark'>  My Order </NavLink>
        </div>
    </div>
  )
}
