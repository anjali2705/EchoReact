import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router';
import {NavLink} from 'react-router-dom';
 import Skeleton from "react-loading-skeleton";
 import { selectUser } from '../features/userSlice';
 import axios from 'axios';
 import { toast } from 'react-toastify';
export default function SearchProduct() {
   const {query }= useParams();
   const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
     const user = useSelector(selectUser);
     useEffect(() =>{
            setLoading(true);
            axios.get(`http://localhost:8080/api/search/?query=${query}`).
            then((res)=>{
                     setProduct(res.data);
                     setLoading(false);
            })
    
      
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
        toast.success("Product Added Successfull!");
          console.log(res.data);
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
       return(<>
        {product.length> 0 ? (product.map(data =>{
        return (<>
               <div className='col-md-6'>
                   <img src={data.productimage} alt = {data.product_name} height="400px" width="400px"/>
               </div>
               <div className='col-md-6'>
                <h4 className='text-uppercase tex-black-50'>
                    {data.product_id}
                </h4>
                <h1 className='display-5'>
                    {data.product_name}
                </h1>
                <p className='lead fw-bolder'>
                    Rating {data.rating}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className="display-6 fw-bold my-4">
                    Rs. {data.price}
                </h3>
                <p className='lead'>{data.description}</p>
                <button className='btn btn-outline-dark px-4 py-2' onClick={productaddtocart}>
                    Add to cart
                </button>
                <NavLink to ="/cart" className='btn bt-dark ms-2 px-3'>
                    Go to cart
                </NavLink>
               </div>
            
            </>) }) ) : (<> <h1> Product does not found</h1> </>)}
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
