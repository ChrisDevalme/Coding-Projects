import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [navActive, setNevActive] = useState(false);
    const toggleNav = () => {
        setNevActive(!navActive)
    }

    const closeMenu = () => {
        setNevActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu
            }
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        if(window.innerWidth <= 1200) {
            closeMenu
        }
    }, [])

    return(
        <nav className={`navbar ${navActive ? "active" : ""}`}>
    
        </nav>
    )
}