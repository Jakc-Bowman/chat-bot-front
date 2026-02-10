'use client'

import { useState } from "react"



export function HamBurgerMenu() {
    return (
        <div className="hamburger-menu" role="menu" aria-label="Main menu">
            <ul className="hamburger-menu-list">
                <li className="hamburger-menu-item"><a href="#home">Home</a></li>
                <li className="hamburger-menu-item"><a href="#about">About</a></li>
                <li className="hamburger-menu-item"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}





export function HamBurger() {
    return (
        <img src="/menuicon.svg" className="hamburger" alt="Open menu" />
    )
}



export default function NavBar() {
    const [hamburgerOpen, sethamberOpen] = useState(false);

    const toggleHamburger = () =>{
        sethamberOpen(!hamburgerOpen)
        console.log("hambuger")
    }
 

    return (
    
    <div>
        <ul className="navstuff">
            <div className="hamburger-wrap" onClick={toggleHamburger}>
                <HamBurger/>
                {hamburgerOpen && <HamBurgerMenu />}
            </div>
            <h1 className="NavTitle">Test</h1>
        </ul>

    </div>
    )

}