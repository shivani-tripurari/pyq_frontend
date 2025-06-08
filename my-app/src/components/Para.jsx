import React from "react";

const Para = ({children, className}) =>{

    return(
        <p
            className={`text-sm font-normal ${className}`}
        >
            {children}
        </p>
    )
}

export default Para;