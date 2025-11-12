import React from "react"
import Header from "./components/Header.jsx"
import Status from "./components/Status.jsx"
import LanguageChips from "./components/LanguageChips.jsx";
import "./App.css";

export default function App() {

    return(
        <main>
            <Header
                heading="Assembly: Endgame"
                intro="Guess the word in under 8 attempts to keep the programming world safe from Assembly!"
            />
            <Status />
            <LanguageChips />
        </main>
    )
}