import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
   
    return (
        <div className="Phonetic">
            
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                <span className="listen-icon"><FontAwesomeIcon icon={faPlayCircle} /></span>
                    </a>
                   
            <span className="pronounciation">/{props.phonetic.text}/</span>
               
                
            </div>
    );
}