import React, { useState } from "react";
import { Link } from "react-router-dom"

import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { SidebarData } from "./SidebarData";
import "./styles.css"

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className="Navbar">
                <Link to="#" className="menuBars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="navMenuItems" onClick={showSidebar}>
                    <li className="navbarToggle">
                        <Link to="#" className="menuBars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;