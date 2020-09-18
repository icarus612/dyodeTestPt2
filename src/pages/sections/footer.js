import React from "react";
import facebook from "../../assets/images/Group3.png";
import instagram from "../../assets/images/Group8.png";
import twitter from "../../assets/images/Group15.png";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-links-left">
                <ul>
                    <li className="title">Customer Service</li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Gift Certificates</a></li>
                    <li><a href="#">Wishlist</a></li>
                </ul>
                <ul>
                    <li className="title">Company</li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Affiliates</a></li>
                </ul>
            </div>
            <div className="footer-links-right">
                <h5>Follow Us</h5>
                <div className="footer-links-right-img">
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={twitter} />
                </div>
            </div>
        </section>
    );
}

export default Footer;