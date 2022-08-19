import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { selectUser } from '../features/userSlice';
import '../styleSheet/cart.css';
import {  toast } from 'react-toastify';
export default function AddCart() {

  const history = useNavigate();
  const user = useSelector(selectUser);
  const[cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
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
                 totalPrice();
        
    })
}

 const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].qty += d;

    if (arr[ind].qty === 0) arr[ind].qty = 1;
    setCart([...arr]);
  
  };

     const handleRemove = (cartId)  => {
      console.log(cartId +"cartId");
        let config = {
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': 'https://localhost:3000',
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
            }
          }
  
        axios.delete(`http://localhost:8080/api/addtocart/cart/${cartId}`, config) .then(res => {
          //set data in cart   
          setCart(res.data); 
          toast.success("Product Removed Successfull!");

});
    
  };

   function totalPrice() {
    let ans = 0;
    cart.map((item) => (ans += item.qty * item.price));
    return ans;
  };

  
    function Order(){
         let config = {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': 'https://localhost:3000',
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type"
              }
            }
         cart.map(data=>{
                        let product_id = data.pid ;
                        let qty = data.qty;
                        let price = data.price;
                        let user_id = id;
                        let item = {product_id,qty,price,user_id};
                        axios.post('http://localhost:8080/order',item , config)
                        .then(res => {
                         toast.success("Order Successfull!");
                        console.log(res.data);
                        })
         });
        
  };

function updateCart(){
      cart.map(data =>{
                    axios.put(`http://localhost:8080/api/addtocart/cart/${data.id}`, data).then(res => {
                        toast.info("Cart Updated Successfully");
                    }, (error)=>{
                      toast.warning("Something Went Wrong");
                   })
             })
}

   useEffect(() =>{
      fetchData();
},[]);

const ShowCart = () =>{
    return (
        <>
           <div className="container">
               <article>
             <h2>Cart</h2>
               {console.log(cart)}
                {cart.length > 0 ? cart.map((item) => (<>
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.productimage} alt="" />
            <p>{item.product_name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.qty}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      </>)) :( <>  
       <h4>Nothing In Cart</h4>
     </>)
            }
            {cart.length > 0 ? (<>
             <div className="order">
         <Link to="/myorder" className="btn btn-outline-dark" onClick={Order}>Order Now</Link>
         <button className="btn btn-outline-dark" onClick={updateCart}>Update</button>
      </div>
               <div className="total">
          <span>Total Price</span>
          <span>Rs - {totalPrice()}</span>
        </div>
            </>) : (<>
             <Link className="btn btn-outline-dark" to="/products">Go for Shopping</Link>
            </>)}
    </article>
          </div>
        </>
    )};
   
  
  return (
    <>
            <ShowCart/>
    </>
  )

}

