import React from 'react'
import Product from './Product';
import '../styleSheet/index.css'
export default function Home() {
  return (
    <div  className="container">
       <div className="row">
              <div className="col-md-6">
                     <div class="hero-title">
                        <h1>The sound of a new generation</h1>
                    </div>
                    <div class="hero-caption">
                        <p>Music is meant to be
                            <span class="blue-text"> experinced</span>, not tolerated</p>
                    </div>
                    <div class="hero-caption-para">
                        <p>Without a good pair of headphones, your missing out on the top-of-the-line quality that your
                            music has to offer. A pair of high quality headphones is one of the most important peices of
                            equipment to invest in.</p>
                    </div>
               </div>
                <div className="col-md-6">
                      <div class="card bg-light text-black border-0">
                          <img src="hero1x.png" class="card-img" height="750px" width="400px"   alt="..."/>
                    </div>
                </div>
        
     
        
         </div>



        <Product/>
   </div>
  )
}
