import React from "react";
import { FaRocket } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import "./styles.css";

const linkArr = ["About", "Projects", "Connect", "Joanne"];

export const Navbar = ({navigateToPage} : {
    navigateToPage: (val: number) => void;
}) => {

    const navigate = useNavigate();

    const navigationLink = (idx: number) => {
        if (idx < 3) {
            navigate("/");
            navigateToPage(idx);
        } else {
            navigate("/Joanne");
        }
    }

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
                    onClick={() => navigationLink(idx)}>
                        {navLink}
                    </div>
                ))}
            </div>
        </div>
    )
}