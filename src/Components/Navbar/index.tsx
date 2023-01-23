import React from "react";
import { FaRocket } from 'react-icons/fa';

import "./styles.css";

const linkArr = ["About", "Projects", "Connect"];

export const Navbar = ({navigateToPage} : {
    navigateToPage: (val: number) => void;
}) => {

    return (
        <div className={"navbar"}>
            <div className={"icon"}>
                <FaRocket size={40} color={"white"} />
            </div>
            <div className={"linkContainer"}>
                {linkArr.map((navLink, idx) => (
                    <div 
                    key={idx}
                    className={"link"} 
                    onClick={() => navigateToPage(idx)}>
                        {navLink}
                    </div>
                ))}
            </div>
        </div>
    )
}