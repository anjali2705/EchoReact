import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';

import { selectUser } from '../features/userSlice';
export default function MyOrder() {

  const history = useNavigate();
  const user = useSelector(selectUser);
  const[cart, setCart] = useState([]);
   const [price, setPrice] = useState();
  let products =[];
  const id = user.id;
  //console.log(id + " user id in cart");

  function fetchData(){
    let config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': 'https://localhost:3000',
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
          }
        }
    axios.get(`http://localhost:8080/api/addtocart/getCartData/${id}`,config)
    .then(res => {
                   //set data in cart
                   setCart(res.data); 

                   let ans = 0;
                   cart.map((item) => (ans += item.qty * item.price));
                   setPrice(ans);

               
    })
}

const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.qty * item.price));
    setPrice(ans);
  };

 function totalPrice() {
    let ans = 0;
    cart.map((item) => (ans += item.qty * item.price));
    return ans;
  };
   useEffect(() =>{
      fetchData();
},[]);

const ShowCart = () =>{
    return (
        <>
               <article>
      <h2>My Order</h2>
      {cart.length > 0 ? cart.map((item) => (<>
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.productimage} alt="" />
            <p>{item.product_name}</p>
          </div>
          <div>
          <button>{item.qty}</button>
          </div>
          <div>
            <span>{item.price}</span>
          </div>
        </div>
      </>)) : (<>  
       <h4>Shopping Bag is Empty.</h4> </>)
            }
            {cart.length > 0 ?(<>
             <div className="total">
          <span>Total</span>
          <span>Rs - {totalPrice()}</span>
        </div>
        <div>
          <h4>Your Billing Address</h4>
          <h6>{user.address}</h6>
        </div>
            </>) :(<> <Link className="btn btn-outline-dark" to="/products">Go for Shopping</Link></>) }
    </article>
        </>
    )};
  return (
    <>
            <ShowCart/>
    </>
  )

}

