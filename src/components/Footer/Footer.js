import React from 'react';


import './Footer.module.css';

function Footerr() {
    return ( 
        <div className="page-footer bg-dark">
                <div className="bg-danger">
  <div className="container">
    <div className="row py-4 d-flex align-items-center">
     
      <div className="col-md-12 text-center"> 
          <a href="#"><i className="fab fa-facebook-f white-text mr-4"> </i></a>         
          <a href="#"><i class="fab fa-twitter white-text mr-4"> </i></a>
          <a href="#"><i class="fab fa-google-plus-g white-text mr-4"> </i></a>
          <a href="#"><i class="fab fa-linkedin-in white-text mr-4"> </i></a>
          <a href="#"><i class="fab fa-instagram white-text"> </i></a> 
         </div>

   </div>
  </div>
</div>



<div className="container text-center text-md-left mt-2">
  <div className="row">

    <div className="col-md-4 mx-auto mb-2">
      <h6 className="text-uppercase font-weight-bold">The Providers</h6>
      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </div>

    <div className="col-md-2 mx-auto mb-4">
      <h6 className="text-uppercase font-weight-bold">Products</h6>
      {/* <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style="width: 85px; height: 2px"/> */}
     
       <ul className="list-unstyled">
          <li className="my-2"><a href="#">Html 5</a></li>        
          <li className="my-2"><a href="#">Css 3</a></li>
          <li className="my-2"><a href="#">Bootstrap 4</a></li>
          <li className="my-2"> <a href="#">JavaScript</a></li>         
        </ul>
    </div>

    <div className="col-md-2 mx-auto mb-4">
      <h6 clclassNameass="text-uppercase font-weight-bold">Useful links</h6>
      {/* <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style="width: 110px; height: 2px"/> */}
        <ul className="list-unstyled">
          <li className="my-2"><a href="#">Home</a></li>        
          <li className="my-2"><a href="#">About</a></li>
          <li className="my-2"><a href="#">Services</a></li>
          <li className="my-2"> <a href="#">Contact</a></li>         
        </ul>
    </div>

    <div className="col-md-3 mx-auto mb-4">
      <h6 className="text-uppercase font-weight-bold">Contact</h6>
      {/* <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style="width: 75px; height: 2px"/> */}
        <ul className="list-unstyled">
          <li className="my-2"><i class="fas fa-home mr-3"></i> Karachi, NY 10012, US</li>
          <li className="my-2"><i class="fas fa-envelope mr-3"></i> theprovis@gmail.com</li>
          <li className="my-2"><i class="fas fa-phone mr-3"></i> + 01 234 567 88</li>
          
        </ul>
    </div>
  </div>
</div>

<div className="footer-copyright text-center py-3">
  <p>&copy; Copyright
  <a href="#">theprovider.com</a></p>
  <p>Designed by Yash Verma </p>
</div>
        </div>

        



       
      );
}
export default Footerr;
// 180030009339,18001219339,  242382517