import React from "react"
import Header from "./components/Header.jsx"
import Status from "./components/Status.jsx"
import LanguageChips from "./components/LanguageChips.jsx";
import Keyboard from "./components/Keyboard.jsx";
import {languages} from "./languages.js";
import "./App.css";

export default function App() {
    // State values
    const [currentWord, setCurrentWord] = React.useState("react")
    const [guessedLetters, setGuessedLetters] = React.useState([])

    // Derived Values
    const wrongGuessCount = guessedLetters.filter(guess => !currentWord.includes(guess)).length

    const addGuessedLetter = (letter) => {

        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )

    }

    const hasWon = currentWord
        .split('')
        .every(letter => guessedLetters.includes(letter))

    const isGameOver = wrongGuessCount >= languages.length - 1 || hasWon

    const wordArr = currentWord.split('').map((letter, index) => (
        <span key={index} className="letter-box-items">
            {guessedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : ''}
        </span>
    ))

    return(
        <main>
            <Header
                heading="Assembly: Endgame"
                intro="Guess the word in under 8 attempts to keep the programming world safe from Assembly!"
            />
            <Status />
            <LanguageChips
                wrongGuessCount = {wrongGuessCount}
            />
            <section className="letter-box">
                {wordArr}
            </section>
            <Keyboard
                addGuessedLetter = {addGuessedLetter}
                currentWord = {currentWord}
                guessedLetters = {guessedLetters}
            />
            {
                isGameOver && <button className="new-game">New Game</button>
            }
        </main>
    )
}
