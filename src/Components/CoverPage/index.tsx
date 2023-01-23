import React, { useRef, useState } from 'react';
import { AiFillCaretRight, AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';

import "./styles.css";
import { coverStory } from '../../userInput';



export default function CoverPage() {

    const buttonDropdownRef = useRef<HTMLDivElement | null>(null);
    
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownPos, setDropdownPos] = useState<number[]>([]);

    const handleKnowMore = () => {
        const divRef = buttonDropdownRef.current;
        if (divRef) {
            setDropdownPos([divRef.offsetTop + divRef.offsetHeight, divRef.offsetLeft, divRef.offsetWidth]);
        }
        setShowDropdown((state) => !state);
        document.body.style.overflow = "hidden";
    }

    const removeDropdown = () => {
        setShowDropdown(false);
        document.body.style.overflow = "auto";

    }

    return (
        <div className={"cover-page-container"}>
            <div className={"cover-picture"}>
                <div className={"image-container"}>
                    <div id={"profilepic"} />
                </div>
                <div className={"image-wording-details"}>
                    <div id={"image-name"} className={"image-details font-face-gm"}>
                        Jayden Ng
                    </div>
                    <div id={"image-job"} className={"image-details font-face-gm-semi"}>
                        Front-End Software Engineer
                    </div>
                    <div id={"image-buttons"} className={"image-details"}>
                        <div id={"button-1"} 
                        style={{ background: showDropdown ? "aqua" : "white"}}
                        ref={buttonDropdownRef} 
                        onClick={handleKnowMore}>
                            <div id={"button-1-text"}>
                                Know more
                            </div>
                            <div id={"button-1-icon"}>  
                                {showDropdown ? 
                                    <AiOutlineUp size={20} color={"black"} />
                                    :
                                    <AiOutlineDown size={20} color={"black"} />
                                }
                            </div>                            
                              
                        </div>
             
                        <a id={"button-2"} href={"/Resume_Ng Jun Wei_Feb 2022.pdf"} download>
                            Resume       
                        </a>
          
                    </div>
                </div>
                {showDropdown ?
                <>
                    <div className={"overlay"} onClick={removeDropdown} /> 
                    <div 
                    className={"dropdown"}
                    style={{ position: "absolute", top: dropdownPos[0], left: dropdownPos[1], width: dropdownPos[2] }}
                    >
                        <DropDownTable showDropdown={removeDropdown} />  
                    </div>
                </>
                : null}
            </div>
            <div className={"cover-desc"}>
                {coverStory}
            </div>

        </div>
    )
}


const DropDownTable = ({showDropdown} : {
    showDropdown: () => void;
}) => {
    const navigateTo = (pageNo: number) => {
        scroll.scrollTo(window.innerHeight*pageNo, { 
            smooth: true, 
            delay: 0, 
            duration: 300 
        });
    };
    const handleOnClick = (pageNo: number) => {
        navigateTo(pageNo);
        showDropdown();

    }

    return (
        <ul className={"dropdownlist"}>
            <li className={"dropdownComponent firstComponent"} onClick={() => handleOnClick(1)}>
                <div className={"dropdowndesc"}>
                    My Projects
                </div>
                <div className={"dropdownicon"}>
                    <AiFillCaretRight size={20} color={"black"} />
                </div>

            </li>
            <li className={"dropdownComponent lastComponent"} onClick={() => handleOnClick(2)}>
                <div className={"dropdowndesc"}>
                    Reach Me
                </div>
                <div className={"dropdownicon"}>
                    <AiFillCaretRight size={20} color={"black"} />
                </div>

            </li>
        </ul>
    )
}