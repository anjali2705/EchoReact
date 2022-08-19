import React from 'react'
import '../styleSheet/aboutpage.css';
export default function About() {
  return (
    <div className="container">
        
        <div class="jumbotron text-center">
            <h1>Echo</h1>
            <p>We specialize in built connection</p>
            <form class="form-inline">
                <div class="input-group">
                <input type="email" class="form-control" size="50" placeholder="Email Address" required/>
                <div class="input-group-btn">
                    <button type="button" class="btn btn-danger">Subscribe</button>
                </div>
                </div>
            </form>
        </div> 
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-8">
                <h2>The Sound of a new generation</h2>
                <h4>Music is meant to be experinced, not tolerated.</h4>
                <p>Without a good pair of headphones, your missing out on the top-of-the-line quality that your music has to offer.<br></br>A pair of high quality headphones is one of the most important peices of equipment to invest in.</p>
                <button class="btn btn-default btn-lg">Get in Touch</button>
                </div>
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-signal logo"></span>
                </div>
            </div>
            </div>

            <div class="container-fluid bg-grey">
            <div class="row">
                <div class="col-sm-4">
                <span class="glyphicon glyphicon-globe logo"></span>
                </div>
                <div class="col-sm-8">
                <h2>Our Values</h2>
                <h4><strong>MISSION:</strong> Our mission is to connect people.</h4>
                </div>
            </div>
        </div>

        <div class="container-fluid text-center">
            <h2>SERVICES</h2>
            <h4>What we offer</h4>
            <br></br>
            <div class="row">
                <div class="col-sm-4">
                <span class="fa fa-power-off"></span>
                <h4>POWER</h4>
                {/* <p>Lorem ipsum dolor sit amet..</p> */}
                </div>
                <div class="col-sm-4">
                <span class="fa fa-heart"></span>
                <h4>LOVE</h4>
                {/* <p>Lorem ipsum dolor sit amet..</p> */}
                </div>
                <div class="col-sm-4">
                <span class="fa fa-lock"></span>
                <h4>JOB DONE</h4>
                {/* <p>Lorem ipsum dolor sit amet..</p> */}
                </div>
                </div>
                <br></br>
            <div class="row">
                <div class="col-sm-4">
                <span class="fa fa-leaf"></span>
                <h4>GREEN</h4>
                {/* <p>Lorem ipsum dolor sit amet..</p> */}
                </div>
                <div class="col-sm-4">
                <span class="fa fa-certificate"></span>
                <h4>CERTIFIED</h4>
                {/* <p>Lorem ipsum dolor sit amet..</p> */}
                </div>
                <div class="col-sm-4">
                <span class="fa fa-wrench"></span>
                <h4>HARD WORK</h4>
                {/* <p>Lorem ipsum dolor sit amet..</p> */}
                </div>
            </div>
        </div>

        <div class="container-fluid text-center bg-grey">
            <h2>Portfolio</h2>
            <h4>What we have created</h4>
            <div class="row text-center">
                <div class="col-sm-4">
                <div class="thumbnail">
                    <img src="paris.jpg" alt="Paris"/>
                    <p><strong>Paris</strong></p>
                    <p>Yes, we built Paris</p>
                </div>
                </div>
                <div class="col-sm-4">
                <div class="thumbnail">
                    <img src="newyork.jpg" alt="New York"/>
                    <p><strong>New York</strong></p>
                    <p>We built New York</p>
                </div>
                </div>
                <div class="col-sm-4">
                <div class="thumbnail">
                    <img src="sanfran.jpg" alt="San Francisco"/>
                    <p><strong>San Francisco</strong></p>
                    <p>Yes, San Fran is ours</p>
                </div>
                </div>
             </div>

     


         </div>
    </div>
  )
}
