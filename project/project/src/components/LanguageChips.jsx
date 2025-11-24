import React from "react";
import {languages} from "../languages.js";

export default function LanguageChips(props) {
    const languageElements = languages.map((language, index) => {
        const isLanguageLost = index < props.wrongGuessCount

        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }

        return (
                <span key={language.name} className={`chip ${isLanguageLost && 'lost'}`} style={styles}>{language.name}</span>
            )
        }
    )

    return (
        <section className="chips-list">
            {languageElements}
        </section>
    )
}