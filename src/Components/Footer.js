import React from 'react'
import '../Components/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer_containers'>
                    <div className='footer_column company'>
                        <p className='footer_heading'>Company</p>
                        <br />
                        <p className='text_footer'>
                            <Link to='/about' style={{ textDecoration: "none", color: "white" }}>About Us</Link>
                        </p>
                        <p className='text_footer'>
                            <Link to='/contact' style={{ textDecoration: "none", color: "white" }}>Contact</Link>
                        </p>
                        <p className='text_footer'>
                            <Link to='/table' style={{ textDecoration: "none", color: "white" }}>Reservation</Link>
                        </p>
                        <p className='text_footer'>Privacy Policy</p>
                        <p className='text_footer'>Terms & Condition</p>
                    </div>

                    <div className='footer_column opening'>
                        <p className='footer_heading'>Opening</p>
                        <br />
                        <p className='text_footer3'>Monday - Saturday</p>
                        <p className='text_footer31'>09AM - 09PM</p>
                        <br />
                        <p className='text_footer3'>Sunday</p>
                        <p className='text_footer31'>10AM - 08PM</p>
                    </div>

                    <div className='footer_column contact'>
                        <p className='footer_heading'>Contact</p>
                        <br />
                        <p className='text_footer2'>
                            <div className='icon_footer'><i className="fa-solid fa-location-dot"></i></div>
                            123 Street, New York, USA
                        </p>
                        <p className='text_footer2'>
                            <div className='icon_footer'><i className="fa-solid fa-phone"></i></div>
                            +012 345 67890
                        </p>
                        <p className='text_footer2'>
                            <div className='icon_footer'><i className="fa-solid fa-envelope"></i></div>
                            info@example.com
                        </p>
                        <div className='text_footer21'>
                            <i className="fa-brands fa-square-twitter"></i>
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>

                    

                    <div className='footer_column newsletter'>
                        <p className='footer_heading'>Newsletter</p>
                        <br />
                        <p className='text_footer'>An email you can send to customers to update them about your brand's latest products and services</p>
                        <div>
                            <form>
                                <input placeholder='Your email' type='email' id='email' name='email' required className='inp_footer' />
                                <button className='but_footer'>SIGNUP</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer