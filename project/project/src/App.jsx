import React from "react"
import Header from "./components/Header.jsx"
import Status from "./components/Status.jsx"
import LanguageChips from "./components/LanguageChips.jsx";
import "./App.css";

export default function App() {

    const [currentWord, setCurrentWord] = React.useState("react")

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
        </main>
    )
}