import React from "react";

export default function Keyboard(props) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyboardBtns = alphabet.toUpperCase().split('').map((letter, index) => {

        const isGuessed = props.guessedLetters.includes(letter)
        const isCorrect = isGuessed && props.currentWord.toUpperCase().includes(letter)
        const isWrong = isGuessed && !props.currentWord.toUpperCase().includes(letter)

        const getButtonClass = () => {
            if(isCorrect) return "correct";
            if(isWrong) return "wrong";
            return ""
        }

        return (
            <button
                key={index}
                className={`keyboard-btn ${getButtonClass()}`}
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
