'use strict';

import { getActualRGBcode, setNewRGBcode } from "./../../rgb-code/rgb-code.js";
import { appendColorsToSamples, newColorsCall } from '../../color-samples/color-samples.js';

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
    let actualRGBcode = getActualRGBcode();

    if(actualRGBcode === colorSample.style.backgroundColor.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
}

function markCorrectGuessedColorSample(colorSample) {
    if(isAlreadyGuessedCorrectly()) {
        return;
    }
    else {
        colorSample.classList.add(correctGuessClassName);
    }
}

function setDrawnByLotsColorToAllColorSamples() {
    let colorSamples = document.querySelectorAll(".color-samples__color-sample");
    let actualRGBcode = getActualRGBcode();
    
    let timeout = 0;
    for(let i = 0; i < colorSamples.length; i++) {
        if(matchesDrawnRGBcode(colorSamples[i])) {
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
        setNewRGBcode();
        appendColorsToSamples();
    }, timeout + 1000);

    newColorsCall.setNewColorsCallAs(true);
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