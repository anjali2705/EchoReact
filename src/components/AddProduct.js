import React,{useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {  toast } from 'react-toastify';
export default function AddProduct(props) {

    const [name, setName]= useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
   

    function addProduct(){
        let config = {
            headers: {
              "Content-Type": "application/json",
              'Access-Control-Allow-Origin': 'https://localhost:3000',
              "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
              "Access-Control-Allow-Headers": "Content-Type"
              }
            }
        let product_name = name;
        let category_id = category;
        let productimage = image.slice(12);
        let rating =5;

        let item = {product_name, price,category_id,productimage, description, rating};
        axios.post('http://localhost:8080/api/save',item , config)
        .then(res => {
          toast.success("Product Added Successfully!");
          console.log(res.data);
        })    
    }
  return (
    <div className='container'>
        <div className='col-sm-6 offset-sm-3'>
                    <h1 className="text-center">Add Product</h1>
                    <h6>Product Name:</h6>
                    <input type="text" placeholder='Product Name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/>
                    <br></br>
                    <h6>Price:</h6>
                    <input type="text" placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)} className='form-control'/>
                    <br></br>
                    <h6>Category Id:</h6>
                    <input type="text" placeholder='Category Id' value={category} onChange={(e)=>setCategory(e.target.value)} className='form-control'/>
                    <br></br>
                    <h6>Product Image:</h6>
                    <input type="file" placeholder='Product Image' value={image} onChange={(e)=>setImage(e.target.value)} className='form-control'/>
                    <br></br> 
                    <h6>Description:</h6>
                    <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} className='form-control'/>
                    <br></br>
                    <Link  to="/products" className='btn btn-primary'  onClick={addProduct}>Save Product</Link>
      </div>
  </div>
  )
}

