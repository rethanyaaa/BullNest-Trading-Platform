import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#f8f9fa", paddingTop: "50px" }}
    >
      <div className="row justify-content-between">
        {/* Logo and About */}
        <div className="col-md-3 col-12 ps-5 text-md-left mb-4">
          <img
            src="media/images/logo.png"
            alt="BullNest logo"
            style={{ width: "50%" }}
          />
          <p className="mt-3" style={{ fontSize: "14px", color: "#6c757d" }}>
            © 2010 - 2024, BullNest Inc. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-md-2 col-12 mb-4">
          <h5 className="text-dark mb-3">Quick Links</h5>
          <a href="#" className="d-block text-muted mb-2 footer-link">
            About Us
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
            Our Products
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
            Pricing
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
            Careers
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
          BullNest.tech
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
          Press & media
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
          BullNest cares (CSR)
          </a>
        </div>

        {/* Support */}
        <div className="col-md-2 col-12 mb-4">
          <h5 className="text-dark mb-3">Support</h5>
          <a href="#" className="d-block text-muted mb-2 footer-link">
            Contact Us
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
            FAQ
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
            Help Center
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
            Terms & Conditions
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
          List of charges
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
          Downloads & resources
          </a>
          <a href="#" className="d-block text-muted mb-2 footer-link">
          BN-Connect blog
          </a>
        </div>

        {/* Contact and Social Media */}
        <div className="col-md-3 col-7 mb-4">
          <h5 className="text-dark mb-3">Stay Connected</h5>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Subscribe to our newsletter for the latest updates.
          </p>
          <div>
            <a href="#" className="text-muted me-3 footer-icon">
              <i
                className="fab fa-facebook-square"
                style={{ fontSize: "24px" }}
              ></i>
            </a>
            <a href="#" className="text-muted me-3 footer-icon">
              <i
                className="fab fa-twitter-square"
                style={{ fontSize: "24px" }}
              ></i>
            </a>
            <a href="#" className="text-muted footer-icon">
              <i className="fab fa-linkedin" style={{ fontSize: "24px" }}></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="row justify-content-center mt-4 pt-4"
        style={{ borderTop: "1px solid #ddd" }}
      >
        <p className="text-center text-muted" style={{ fontSize: "12px" }}>
          BullNest Inc. | All rights reserved. | Member of NSE, BSE & MCX – SEBI
          Registration no. INZ000031633. <br />
          For any complaints, contact us at complaints@bullnest.com. Investments
          are subject to market risks; read all documents carefully.
        </p>
      </div>
    </div>
  );
};

export default Footer;
