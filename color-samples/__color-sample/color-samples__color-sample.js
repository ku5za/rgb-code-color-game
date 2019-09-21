'use strict';

import { getActualRGBcodeTextContent, setNewRGBcodeTextContent } from "./../../rgb-code/rgb-code.js";
import { appendColorsToSamples } from '../../color-samples/color-samples.js';

const correctGuessClassName = "color-samples__color-sample_checked";
const wrongGuessClassName = "color-samples__color-sample_disabled";

export function compareToDrawnRGBcode(colorSample) {
    if(matchesDrawnRGBcode(colorSample)) {
        markCorrectGuessedColorSample(colorSample);
        setDrawnByLotsColorToAllColorSamples();
    }
    else {
        disableWrongGuessedColorSample(colorSample);
    }
}

function matchesDrawnRGBcode(colorSample) {
    let actualRGBcode = getActualRGBcodeTextContent();

    if(actualRGBcode === colorSample.style.backgroundColor.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
}

function setDrawnByLotsColorToAllColorSamples() {
    let colorSamples = document.querySelectorAll(".color-samples__color-sample");
    let actualRGBcode = getActualRGBcodeTextContent();
    
    let timeout = 0;
    for(let i = 0; i < colorSamples.length; i++) {
        if(markCorrectGuessedColorSample(colorSamples[i])) {
            continue;
        }
        else {
            timeout = i * 150;
            window.setTimeout(() => {
                clearWrongGuessedColorSample(colorSamples[i]);
                colorSamples[i].style.backgroundColor = actualRGBcode;
            }, timeout);
        }
    }

    window.setTimeout(() => {
        resetGuessedColorSamples();
        setNewRGBcodeTextContent();
        appendColorsToSamples();
    }, timeout + 1000);
}

function markCorrectGuessedColorSample(colorSample) {
    if(isAlreadyGuessedCorrectly()) {
        return;
    }
    else {
        colorSample.classList.add(correctGuessClassName);
    }
}

function disableWrongGuessedColorSample(colorSample) {
    if(isAlreadyGuessedCorrectly()) {
        return;
    }
    else {
        colorSample.classList.add(wrongGuessClassName);
    }
}

function isAlreadyGuessedCorrectly() {
    let correctGuess = document.querySelector("." + correctGuessClassName);
    if(correctGuess) {
        return true;
    }
    else {
        return false;
    }
}

export function resetGuessedColorSamples() {
    clearCorrectGuessedColorSample();
    clearWrongGuessedColorSamples();
}

function clearCorrectGuessedColorSample() {
    let correctGuessedColorSample = document.querySelector("." + correctGuessClassName);
    
    if(correctGuessedColorSample) {
        correctGuessedColorSample.classList.remove(correctGuessClassName);
    }
}

function clearWrongGuessedColorSamples() {
    let wrongGuessedColorSamples = document.querySelectorAll("." + wrongGuessClassName);

    if(wrongGuessedColorSamples) {
        wrongGuessedColorSamples.forEach(colorSample => {
            clearWrongGuessedColorSample(colorSample);
        });
    }
}

function clearWrongGuessedColorSample(colorSample) {
    if(colorSample) {
        colorSample.classList.remove(wrongGuessClassName);
    }
}