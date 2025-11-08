import React from "react"

export default function Header(props) {
    return (
        <div className="header-sect">
            <h1>{props.heading}</h1>
            <p>{props.intro}</p>
        </div>
    )
}