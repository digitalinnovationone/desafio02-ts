import React from "react"

interface ButtonProps { 
    onclick: () => {},
}
export const  Button: React.FC<ButtonProps> = ({onclick}) => {
    return(
        <>
            <button onClick={onclick}>Ola Butao</button>
        </>
    )
}