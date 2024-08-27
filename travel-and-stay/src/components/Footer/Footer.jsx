import './footer.css'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";


export function Footer(){
    return (
        <>
        <div className="footer">
            <div className="secContainer container grid">
                <div className="logoDiv">
                    <div className="footerLogo flex">
                        <a href="" className="logo">
                            <h1 className="flex">
                                <MdTravelExplore className='icon'/>
                                TravelLog
                            </h1>
                        </a>
                    </div>

                    <div className="socials flex">
                        <FaFacebookSquare className='icon'/>
                        <FaSquareXTwitter className='icon'/>
                        <FaInstagramSquare className='icon'/>
                    </div>
                </div>
                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                    <span className="phone">+25400000000</span>
                    <span className="email">travellog@info</span>
                </div>

            </div>
        </div>
        </>
    )
}