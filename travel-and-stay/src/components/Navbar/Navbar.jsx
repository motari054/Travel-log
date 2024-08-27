import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from 'react';

export function Navbar(){
    const [active, setActive] = useState('navBar')

    function showNav(){
        setActive('navBar activeNavBar')
    }

    function removeNav(){
        setActive('navBar')
    }

    // ADDING BACKGROUND TO THE HEADER
    const [transparent, setTransparent] = useState('header')
    function addBg(){
        if(window.scrollY >= 10){
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg)

    return (
        <>
        <section className="navBarSection">
            <div className={transparent}>
                <div className="logoDiv">
                    <a href="#" className='logo'>
                        <h1 className='flex'><MdTravelExplore className='icon' />TravelLog</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className='navItem'>
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className='navItem'>
                            <a href="#" className="navLink">Products</a>
                        </li>

                        <li className='navItem'>
                            <a href="#" className="navLink">Resources</a>
                        </li>

                        <li className='navItem'>
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <li className='navItem'>
                            <a href="#" className="navLink">Blog</a>
                        </li>

                        <div className="headerBtns flex">
                            <div className="btn loginBtn">
                                <a href="#">Login</a>
                            </div>

                            <div className="btn signupBtn">
                                <a href="#">Sign up</a>
                            </div>
                        </div>
                    </ul>
                    <div className="closeNavBar" onClick={removeNav}>
                        <AiFillCloseCircle className='icon'/>
                    </div>

                </div>

                <div className="toggleNavBar" onClick={showNav}>
                    <TbGridDots className='icon'/>
                </div>

            </div>
        </section>
        </>
    )
}