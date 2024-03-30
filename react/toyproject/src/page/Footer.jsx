import React from 'react';
import './css/Footer.css';
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiPersonSimpleRunBold } from "react-icons/pi";

function Footer() {
    return (
        <div className='footer-container'>
            <nav className='footer-navigation'>
                <div className="footer-navigation-group">
                    <span className='footer-navigation-item team'>Team</span>
                    <span className='footer-navigation-item'>contect</span>
                    <span className='footer-navigation-item'>info</span>
                </div>
                <div className="footer-navigation-group">
                    <span className='footer-navigation-item team'>Comunity</span>
                    <span className='footer-navigation-item'>contect</span>
                    <span className='footer-navigation-item'>artist</span>
                </div>  
                <div className="footer-navigation-group">
                    <span className='footer-navigation-item team'>Link</span>
                    <span className='footer-navigation-item'>contect</span>
                    <span className='footer-navigation-item'>info</span>
                </div>   
                
            </nav>
           
            <div className='footer-info'>
                {/* 추가적인 내용이 있다면 여기에 추가 */}
                @bonobono @kejangcon @당근 @살려줘 2024 spotify api
            </div>
            <div className='footer-icon'>
                <CiTwitter size={28}/>
                <FaInstagram size={28}/>
                <PiPersonSimpleRunBold size={28}/>
            </div> 
        </div>
    );
}

export default Footer;