import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
   
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faPlayCircle} size="2x" />
            </a>
            <br />
            <div>{props.phonetic.text}</div>
        </div>
    );
}