import React from "react"
import Header from "./components/Header.jsx"
import Status from "./components/Status.jsx"
import LanguageChips from "./components/LanguageChips.jsx";
import Keyboard from "./components/Keyboard.jsx";
import "./App.css";

export default function App() {

    const [currentWord, setCurrentWord] = React.useState("react")
    const [guessedLetters, setGuessedLetters] = React.useState([])


    const addGuessedLetter = (letter) => {

        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )

    }

    const wordArr = currentWord.split('').map((letter, index) => {
        if (guessedLetters.includes(letter)) {
            return (
                <span key={index} className="letter-box-items">{letter.toUpperCase()}</span>
            )
        } else {
            return (
                <span key={index} className="letter-box-items"></span>
            )
        }
    })

    return(
        <main>
            <Header
                heading="Assembly: Endgame"
                intro="Guess the word in under 8 attempts to keep the programming world safe from Assembly!"
            />
            <Status />
            <LanguageChips />
            <section className="letter-box">
                {wordArr}
            </section>
            <Keyboard
                addGuessedLetter = {addGuessedLetter}
                currentWord = {currentWord}
                guessedLetters = {guessedLetters}
            />
            <button className="new-game">New Game</button>
        </main>
    )
}
