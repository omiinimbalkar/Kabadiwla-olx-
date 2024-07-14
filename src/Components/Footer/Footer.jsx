import React from 'react'
import './Footer.css'
function Footer() {
    var today = new Date()
    var year = today.getFullYear()
    return (
        <div className='footer'>
            <div className='about'>
                <div className="column">
                    <span>POPULAR LOCTAIONS</span>
                    <p>Kolkata</p>
                    <p>Mumbai</p>
                    <p>Chennai</p>
                    <p>Pune</p>
                </div>
                <div className="column">
                    <span>TRENDING LOCTAIONS IN MAHARSHTRA</span>
                    <p>Virar</p>
                    <p>Palghar</p>
                    <p>Mumbai</p>
                    <p>Nasik</p>
                </div>
                <div className="column">
                    <span>Contact No</span>
                    <p>9088732902</p>
                    <p>7898373780</p>
                    <p>8973446778</p>
                    <p>9834562312</p>
                </div>
                <div className="column">
                    <span>ABOUT US</span>
                    <p>About The Kabadiwala group</p>
                    <p>Careers</p>
                    <p>Contact us</p>
                    <p>The Kabadiwala People's</p>
                    
                </div>
                <div className="column">
                    <span>Kabadiwala</span>
                    <p>Help</p>
                    <p>Sitemap</p>
                    <p>Legal & Privacy information </p>
                    <p>Blog</p>
                </div>
            </div>
            <div className="copyright">
                <p><span> Other Countries</span>  South Africa - Indonesia</p>
                <p>All rights reserved © 2023-24-{year} The Kabadiwala</p>
            </div>
        </div>
    )
}

export default Footer