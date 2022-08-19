import React, {useState, useEffect} from 'react';
import Skeleton from "react-loading-skeleton";
import {NavLink, Link} from 'react-router-dom';
import { selectUser } from '../features/userSlice';
import {  useSelector } from 'react-redux';
import {  toast } from 'react-toastify';
import axios from 'axios';
export default function Product() {

     const[data, setData] = useState([]);
     const[filter, setFilter] = useState(data);
     const[loading, setLoading] = useState(false);
     const[productId, setProductId] = useState("");
     const [query, setQuery] = useState("");
     //For get user type
     const user = useSelector(selectUser);
     let componentMounted = true;
      useEffect(() => {
          const getProducts = async()=>{
              setLoading(true);
              const response = await fetch("http://localhost:8080/api/getAll");
              if(componentMounted){
                  setData(await response.clone().json());
                  setFilter(await response.json());
                  setLoading(false);
                  console.log(filter);
              }
              return () =>{
                  componentMounted = true;
              }
          }
          getProducts();
      }, []);
 
 
      const Loading = () =>{
          return (
              <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
              </>
          );
      }

      function deleteProduct(){

        let config = {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': 'https://localhost:3000',
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type"
              }
            }
        let product_id = productId;
        axios.delete(`http://localhost:8080/api/products/${product_id}`, config)
        .then(res => {
            if(res.data){
                toast.success("Product deleted successfully!");
            }
            else{
                toast.success("Product deleted successfully!");
            }
          console.log(res.data);
        }, (error) =>{
              toast.warning(" Product Id not exist!");
        })
           
      }


      const filterProduct =(cat) =>{
          const updatedList = data.filter((x)=> x.category_id === cat);
          setFilter(updatedList);
      }
      const ShowProducts = () =>{
        return (
            <>

           <div className='buttons d-flex justify-content-center mb-5 pb-5'>
               <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
               <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct(1)}>Sony</button>
               <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct(2)}>Apple</button>
                <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct(3)}>Boat</button>
             </div>
             {filter.length > 0 ? filter.slice(0, 8).map((product)=>{
                 return(
                     <>
                        <div className='col-md-3 mb-4'>
                        <div class="card h-100 text-center p-4" key={product.product_id} >
                            <img src={product.productimage} class="card-img-top" alt={product.product_name} height="250px"/>
                            <div class="card-body">
                                <p className='card-title mb-0 fw-bold'>{product.product_name}</p>
                                <p class="card-text lead fw-bold">Rs.{product.price}</p>
                                <NavLink to={`/products/${product.product_id}`} className='btn btn-outline-dark'>Buy Now</NavLink>
                            </div>
                            </div>
                        </div>
                     </>
                 );
             }) : (<></>) }
           </>
        );
    }
  return (
   <>  
    <div className='container my-5 py-5'>
      
    {user ?(<>
                 {(user.type == 'admin')? (<>  <div className='row'>
                  <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <Link to="/addProduct" className='btn btn-outline-dark me-2'>ADD PRODUCTS</Link>
                    <Link to="/updateProduct" className='btn btn-outline-dark me-2'>UPDATE PRODUCTS</Link>
                    <input width="0px" type="text" placeholder='Delete Product By Id' value={productId} onChange={(e)=>setProductId(e.target.value)}/>
                    <button type="submit" className='btn btn-primary'  onClick={deleteProduct}>Delete</button>
            
             </div>
         </div></>): (<></>)}
         </>) :
         
         (<></>)}
         <div className='row'>
                 <form className="search-form" >
                    <input type="search" name="search" value={query}  onChange={(e)=>setQuery(e.target.value)} placeholder="Search Products..." />
                    <Link to={`/searchProduct/${query}`} className="search-button btn btn-primary" type="submit" id="submit" >Go!</Link>
            </form>
         </div>

        <div className='row'>
            <div className='col-12 mb-5'>
                <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                <hr/>
                <div className='row justify-content-center'>
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>

    
    </div>
    </>
  )
}
