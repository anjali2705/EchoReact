import React from 'react';
import '../styleSheet/contact.css';
export default function Contact(){
    return (
        <>
             <div class="container-fluid bg-grey">
                    <h2 class="text-center">CONTACT</h2>
                    <div class="row">
                        <div class="col-sm-5">
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p><span class="fa fa-map-marker"></span> Chicago, US</p>
                        <p><span class="fa fa-phone"></span> +00 1515151515</p>
                        <p><span class="fa fa-envelope"></span>  jayesh.patil@cognizant.com</p>
                        <p><span class="fa fa-envelope"></span>  anjali.kumari@cognizant.com</p>
                        <p><span class="fa fa-envelope"></span>  anandhu.reji@cognizant.com</p>
                        <p><span class="fa fa-envelope"></span>  ashutosh.mishra@cognizant.com</p>
                        </div>
                        <div class="col-sm-7">
                        <div class="row">
                            <div class="col-sm-6 form-group">
                            <input class="form-control" id="name" name="name" placeholder="Name" type="text" required/>
                            </div>
                            <div class="col-sm-6 form-group">
                            <input class="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                            </div>
                        </div>
                        <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br></br>
                        <div class="row">
                            <div class="col-sm-12 form-group">
                            <button class="btn btn-default pull-right" type="submit">Send</button>
                            </div>
                        </div>
                     </div>
                 </div>
             </div> 
             <img src="map.jpg"></img>
        </>
    )

}