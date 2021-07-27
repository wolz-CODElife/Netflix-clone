import React, { useEffect, useState } from 'react'
import './Nav.css'
import avatar from './assets/avatar.png'
import logo from './assets/logo.png'

const Nav = () => {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                handleShow(true)
            }
            else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src={logo} alt="Netflix" className="nav_logo" />
            <img src={avatar} alt="Avatar" className="nav_avatar" />
        </div>
    )
}

export default Nav
