import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search() {
    // documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
}

    if (loaded) {
    return (
    <div className="Dictionary">
        <div className="row">
            <div className="col-1">
                <span className="searchIcon"><FontAwesomeIcon icon={faSearch} /></span>
            </div>
            <div className="col-11">
                <form onSubmit={handleSubmit}>
                    <input type="search"
                onChange={handleKeywordChange} placeholder="Type any word..." />
                </form>
            </div>
            <div className="hint">
                Suggested words: babushka, rapprochement, moratorium, beautiful  
            </div>
            
        </div>
        <Results results={results} />
    </div>
    );
    } else {
        load();
        return "loading";
    }
    

    
    
} 