import React from 'react'
import '../styleSheet/FooterStyles.css';
export default function Footer() {
  return (
     <>
 <footer class="footer">
        <div class="footer-background">
            <div class="footer-content">
                <div class="footer-col">
                    <ul class="footer-col-title">
                        <li class="footer-title">
                            <h5>About Headphones</h5>
                        </li>
                        <li class="footers-list-item para-rg footer-long-para">Without a good pair of headphones, 
                        your missing out on the top-of-the-line quality that your music has to offer. 
                        A pair of high quality headphones is one of the most important peices of equipment to invest in. </li>
                        <li class="footer-title">
                            <h5>Connect us on</h5>
                            <div class="social-media-handle">
                                <div class="footer-icon"><a href=""><i class="fa fa-instagram"></i></a>
                                </div>
                                <div class="footer-icon"><a href=""><i class="fa fa-twitter"></i></a>
                                </div>
                                <div class="footer-icon"><a href=""><i class="fa fa-facebook"></i></a>
                                </div>
                                <div class="footer-icon"><a href=""><i class="fa fa-youtube"></i></a>
                                </div>
                                <div class="footer-icon"><a href=""><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="footer-col">
                    <ul class="footer-col-title">
                        <li class="footer-title">
                            <h5>Company</h5>
                        </li>
                        <li class="footers-list-item para-rg text-capitalise">About echo </li>
                        <li class="footers-list-item para-rg text-capitalise">My Account </li>
                        <li class="footers-list-item para-rg text-capitalise">Contact </li>
                        <li class="footers-list-item para-rg text-capitalise">Latest News </li>
                        <li class="footers-list-item para-rg text-capitalise">Help & FAQ's</li>
                        <li class="footers-list-item para-rg text-capitalise">Privacy Policy</li>
                    </ul>
                </div>
                <div class="footer-col">
                    <ul class="footer-col-title">
                        <li class="footer-title">
                            <h5>Links</h5>
                        </li>
                        <li class="footers-list-item para-rg text-capitalise"> <a
                                href="./pages/productPage/productPage.html" class="para-rg">Shop Products</a> </li>
                        <li class="footers-list-item para-rg text-capitalise">My Cart </li>
                        <li class="footers-list-item para-rg text-capitalise"><a
                                href="../Echo-ecommerce/pages/wishlist/wishlist.html" class="para-rg">My Wishlist </a>
                        </li>
                        <li class="footers-list-item para-rg text-capitalise">Checkout </li>
                        <li class="footers-list-item para-rg text-capitalise"> Order Tracking </li>
                        <li class="footers-list-item para-rg text-capitalise">Contact </li>
                    </ul>
                </div>
                <div class="footer-col">
                    <ul class="footer-col-title">
                        <li class="footer-title">
                            <h5>Contact</h5>
                        </li>
                        <li class="footers-sub-title para-rg">
                            Phone
                            <p class="footer-subtitle-caption para-rg">+91 23456 78925</p>
                        </li>
                        <li class="footers-sub-title para-rg">Address
                            <p class="footer-subtitle-caption para-rg"> 880 Brooklyn Street
                                New York, USA</p>
                        </li>
                        <li class="footers-sub-title para-rg">Email
                            <p class="footer-subtitle-caption para-rg"> help@yourcompany.com</p>
                        </li>
                    </ul>
                </div>
            </div>


        </div>


    </footer>

          {/* <footer className="footer">
           <div className="row" >
        	<div className="col-md-3 footer-brand">
                 
            	<h2 className="title"><img src="echo-logo.png" height="50px" alt=""/>  Echo</h2>
                 
               <p className="copyright">© 2022 Cognizant, All rights reserved</p>
            </div>
        	<div className="col-md-4 footer-nav">
            	
            	<div className="col-md-6">
                    <ul className="list">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        	<div className="col-md-2 footer-social">
            	<h4>Follow Us</h4>
            	<div className="row">
                <a href=""><i class="fa fa-facebook"></i>  Facebook</a>
                 <a href=""><i class="fa fa-instagram"></i>  Instagram</a>
                  <a href=""><i class="fa fa-twitter"></i>  Twitter</a>
                </div>
                
            </div>
        	<div className="col-md-3 footer-ns">
            	<h4>Newsletter</h4>
                <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                <p>
                    <div className="input-group">
                      <input type="text" class="form-control" placeholder="Search for..."/>
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><span className="glyphicon glyphicon-envelope"></span></button>
                      </span>
                    </div>
                 </p>
            </div>
        </div>
    </footer> */}
     </>
  )
}
