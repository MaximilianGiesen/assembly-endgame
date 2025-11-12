import React from "react";
import {languages} from "../languages.js";

export default function LanguageChips() {
    const languageElements = languages.map((language) => {
        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }

        return (
                <span key={language.name} className="chips-item" style={styles}>{language.name}</span>
            )
        }
    )

    return (
        <section className="chips-list">
            {languageElements}
        </section>
    )
}