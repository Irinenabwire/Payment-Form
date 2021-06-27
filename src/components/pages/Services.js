import React from 'react';
import '../../App.css';
import Footer from '../Footer';


export default function Services() {
  return (
   
    <>
     <div>
       <h1 className="service">OUR SERVICES</h1>
       
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
         
          <h3 className="section-subheading text-muted mt-5">What we  Offer</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-warning"></i>
            <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">E-commerce payment</h4>
          <p className="text-muted">You get free shipping if you buy good worth 300,at destination of your choice .</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-warning"></i>
            <i className="fa fa-google-wallet fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Bill payment</h4>
          <p className="text-muted">If you refer a customer to come to our store or to buy something, you will stand a chance to win a gift</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-warning"></i>
            <i className="fa fa-rebel fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Fee payment</h4>
          <p className="text-muted">Delivery will take less than 24 hours to rech your destination.</p>
        </div>
      </div>
    </div>
  </section>


      <Footer/>
      </div>
      
     
    </>
  );
}


