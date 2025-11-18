import React from "react";

export default function Keyboard(props) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const keyboardBtns = alphabet.toUpperCase().split('').map((letter, index) => {
        return (
            <button
                key={index}
                className="keyboard-btn"
                onClick={() => props.addGuessedLetter(letter)}
            >
                {letter}
            </button>
        )
    })

    return (
        <section className="keyboard-section">
            {keyboardBtns}
        </section>
    )
}
