import React from "react";

export default function Keyboard() {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const keyboardBtns = alphabet.toUpperCase().split('').map((btn, index) => {
        return (
            <button key={index} className="keyboard-btn">{btn}</button>
        )
    })

    return (
        <section className="keyboard-section">
            {keyboardBtns}
        </section>
    )
}
