import React from "react";
import {languages} from "../languages.js";

export default function LanguageChips() {
    const langChips = languages.map((language) =>
        <p key={language.name} className="chips-item" style={{backgroundColor: language.backgroundColor, color: language.color}}>{language.name}</p>
    )

    return (
        <div className="chips-list">
            {langChips}
        </div>
    )
}