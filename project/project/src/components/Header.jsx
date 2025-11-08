import React from "react"

export default function Header(props) {
    return (
        <header>
            <h1>{props.heading}</h1>
            <p>{props.intro}</p>
        </header>
    )
}