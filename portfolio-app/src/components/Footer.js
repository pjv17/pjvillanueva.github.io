import React from "react";
import './styles/Footer.scss';


const Footer = () => {
    const getDate = new Date();
    let getYear = getDate.getFullYear();
    return(
        <div className="footer z-10 relative py-5">
            <div className="text-center text-white text-base"><p><small>Copyright © {getYear} PJ | Designed and Developed by Peter John Villanueva</small></p></div>
        </div>
    )
}
export default Footer;