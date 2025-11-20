import React from "react";

export default function Keyboard(props) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const getButtonClass = (letter) => {
        if(props.correctLetter[letter]) return "correct";
        if(props.wrongLetter[letter]) return "wrong";
        return ""
    }

    const keyboardBtns = alphabet.toUpperCase().split('').map((letter, index) => {
        return (
            <button
                key={index}
                className={`keyboard-btn ${getButtonClass(letter)}`}
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
