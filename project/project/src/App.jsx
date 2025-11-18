import React from "react"
import Header from "./components/Header.jsx"
import Status from "./components/Status.jsx"
import LanguageChips from "./components/LanguageChips.jsx";
import Keyboard from "./components/Keyboard.jsx";
import "./App.css";

export default function App() {

    const [currentWord, setCurrentWord] = React.useState("react")
    const [guessedLetters, setGuessedLetters] = React.useState([])
    console.log(guessedLetters)

    const addGuessedLetter = (letter) => {
        setGuessedLetters(prevLetters => [...prevLetters, letter])
    }

    const wordArr = currentWord.toUpperCase().split('').map((letter, index) => {
        return (
            <span key={index} className="letter-box-items">{letter}</span>
        )
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
            />
            <button className="new-game">New Game</button>
        </main>
    )
}


//You're very close!
// You've set up the state and the function correctly, but there's a small issue with how you're passing the letter to the `addLetter` function.
// When you click a button, you need to pass the specific letter that was clicked—right now, the function isn't receiving that information. How can you modify the `onClick` handler to pass the letter?