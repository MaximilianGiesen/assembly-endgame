import React from "react"
import Header from "./components/Header.jsx"
import Keyboard from "./components/Keyboard.jsx";
import {languages} from "./languages.js";
import {getFarewellText} from "./utils.js";
import "./App.css";

export default function App() {
    // State values
    const [currentWord, setCurrentWord] = React.useState("react")
    const [guessedLetters, setGuessedLetters] = React.useState([])

    // Derived Values
    const wrongGuessCount = guessedLetters.filter(guess => !currentWord.toUpperCase().includes(guess)).length
    const isGameWon =
        currentWord
            .split("")
            .every(letter =>
                guessedLetters.includes(letter.toUpperCase())
            )
    const isGameLost = wrongGuessCount >= languages.length -1
    const isGameOver = isGameWon || isGameLost

    // Static values
    const addGuessedLetter = (letter) => {

        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )

    }

    const languageElements = languages.map((language, index) => {
            const isLanguageLost = index < wrongGuessCount

            const styles = {
                backgroundColor: language.backgroundColor,
                color: language.color
            }

            return (
                <span key={language.name} className={`chip ${isLanguageLost && 'lost'}`} style={styles}>{language.name}</span>
            )
        }
    )

    const wordArr = currentWord.split('').map((letter, index) => (
        <span key={index} className="letter-box-items">
            {guessedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : ''}
        </span>
    ))

    function renderGameStatus() {
        if (!isGameOver) {
            return null
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } else {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    }

    function renderLostLanguages() {
        if (wrongGuessCount === 0) {
            return null
        }

        const lostLanguage = languages[wrongGuessCount - 1]
        if (lostLanguage) {
            return (
                <div className="lost-languages-sect">
                    <p>{getFarewellText(lostLanguage.name)}</p>
                </div>
            )
        }

    }

    return(
        <main>
            <Header
                heading="Assembly: Endgame"
                intro="Guess the word in under 8 attempts to keep the programming world safe from Assembly!"
            />
            <section>
                {renderLostLanguages()}
            </section>
            <section className={`game-status ${isGameWon ? 'game-won' : isGameLost ? 'game-lost' : ''}`}>
                {renderGameStatus()}
            </section>
            <section className="chips-list">
                {languageElements}
            </section>
            <section className="letter-box">
                {wordArr}
            </section>
            <Keyboard
                addGuessedLetter = {addGuessedLetter}
                currentWord = {currentWord}
                guessedLetters = {guessedLetters}
                isGameOver = {isGameOver}
            />
            {
                isGameOver && <button className="new-game">New Game</button>
            }
        </main>
    )
}
