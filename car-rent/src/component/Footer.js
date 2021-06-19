import React from 'react'
import {FaMapMarker,FaPhone,FaEnvelope,FaFacebook,FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa' 
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

			<div className="footer-left">

				<h3>SYN<span>Rental</span></h3>

				<p className="footer-links">
					<a href="/" className="link-1">Home</a>
					
					<a href="/cars">Cars</a>
				
					<a href="/login">Login</a>
				
					<a href="/register">Register</a>
					
					<a href="/about">About</a>
					
					<a href="/about">Contact</a>
				</p>

				<p className="footer-company-name">SYN car rental © 2021</p>
			</div>

			<div className="footer-center">

				<div>
					<FaMapMarker/>
					<p><span>Arada kefleketema,5 kilo</span> Addis Ababa University</p>
				</div>

				<div>
					<FaPhone/>
					<p>+251987865454 or https://SYNRENTAL.com </p>
				</div>

				<div>
					<FaEnvelope/>
					<p><a href="mailto:support@company.com">SYN-Rental@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="www.facebook.com"><FaFacebook/></a>
					<a href="www.twitter.com"><FaTwitter/></a>
					<a href="www.linkedin.com"><FaLinkedin/></a>
					<a href="www.github.com"><FaGithub/></a>

				</div>

			</div>

		</footer>
        </div>
    )
}

export default Footer
