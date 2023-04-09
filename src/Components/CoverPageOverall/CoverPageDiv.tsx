import React, { forwardRef, ReactElement } from 'react';
import "./styles.css";

const CoverPageDiv = ({children, className} : {
    children: ReactElement;
    className: string;
}, ref: any) => {

    return (
        <div 
        ref={ref}
        className={"cover-page-div" + " " + className } style={{ top: "80px" }}>
            {children}
        </div>
    )
}

export default forwardRef(CoverPageDiv)