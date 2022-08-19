 import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addCart} from '../redux/action';
 import {useParams} from 'react-router';
 import {NavLink} from 'react-router-dom';
 import Skeleton from "react-loading-skeleton";
 import { selectUser } from '../features/userSlice';
 import axios from 'axios';
 import {  toast } from 'react-toastify';
export default function Products() {
    const {id }= useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
   
   const dispatch = useDispatch();
   const addProduct = (product)=>{
       dispatch(addCart(product));
   }

   //For getting login or registered user id
   const user = useSelector(selectUser);
    useEffect(() =>{
        const getProduct = async ()=>{
             setLoading(true);
             const response = await fetch(`http://localhost:8080/api/products/${id}`);
             setProduct(await response.json());
             setLoading(false);
        }
        getProduct();
    }, []);

    function productaddtocart(){
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': 'https://localhost:3000',
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type"
              }
            }
       let product_id= null;
       let pid= product.product_id;
       let price = product.price;
       let user_id = user.id;
       const qty = 1;
       let productimage = product.productimage;
       let product_name = product.product_name;
       let item = {product_id,qty,price,user_id,pid,productimage,product_name};
        axios.post('http://localhost:8080/api/addtocart/cart',item , config)
        .then(res => {
        toast.success("Product Added in cart Successfull!");
         // console.log(res.data);
        })
       }


    const Loading = () =>{
        return(
            <> 
            <div className='col-md-6'>
              <Skeleton height={400}/>
            </div>
<div className='col-md-6' style={{lineHeight:2}}>
    <Skeleton height={50} width={300}/>
    <Skeleton height={75}/>
    <Skeleton height={25} width={150}/>
    <Skeleton height={50}/>
    <Skeleton height={50} width={100}/>
    <Skeleton height={50} width={100} style={{marginLeft:6}}/>
</div>

                </>
        )
    }

    const ShowProduct = () =>{
        return (<>
              
               <div className='col-md-6'>
                   <img src={product.productimage} alt = {product.product_name} height="400px" width="400px"/>
               </div>
               <div className='col-md-6'>
                <h4 className='text-uppercase tex-black-50'>
                    {product.category_id}
                </h4>
                <h1 className='display-5'>
                    {product.product_name}
                </h1>
                <p className='lead fw-bolder'>
                    Rating {product.rating}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    Rs. {product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <button className='btn btn-outline-dark px-4 py-2' onClick={productaddtocart}>
                    Add to cart
                </button>
                <NavLink to ="/cart" className='btn bt-dark ms-2 px-3'>
                    Go to cart
                </NavLink>
               </div>
            </>)
    }
    return (
    <div>
         
     <div className='container py-5'>
    
         <div className='row py-4'>
             {loading ? <Loading/> : <ShowProduct/>}
         </div>
     </div>

    </div>
  )
}
