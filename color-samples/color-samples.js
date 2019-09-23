'use strict';

import { createNewRGBcode, getRandomInt, getActualRGBcode } from '../rgb-code/rgb-code.js';
import { compareToDrawnRGBcode } from "./__color-sample/color-samples__color-sample.js";

let NewColorsCall = {
    colorCall: false,

    setNewColorsCallAs: function(bool) {
        this.colorCall = bool;
    },

    getNewColorsCallValue: function() {
        return this.colorCall;
    }
}

let colorSamplesRows = document.querySelectorAll(".color-samples__row");
let colorSamples = document.querySelectorAll(".color-samples__color-sample");
export let newColorsCall = NewColorsCall;

for (const colorSample of colorSamples) {
    colorSample.addEventListener("click", () => {
        if(newColorsCall.getNewColorsCallValue()) {
            return;
        }
        else {
            compareToDrawnRGBcode(colorSample);
        }
    });
}

export function appendColorsToSamples() {
    newColorsCall.setNewColorsCallAs(false);
    setRandomColorsToSamples();
    setDrawnByLotsColorToRandomSample();
}
appendColorsToSamples();

function setRandomColorsToSamples() {
    for(let color of colorSamples) {
        let colorCode = createNewRGBcode();
        color.style.backgroundColor = colorCode;
    }
}

function setDrawnByLotsColorToRandomSample() {
    let drawnColor = getActualRGBcode();
    let maxIndex = returnVisibleRowsNumber() * 3;
    let randomIndex = getRandomInt(maxIndex);

    colorSamples[randomIndex].style.backgroundColor = drawnColor;
}

function returnVisibleRowsNumber() {
    let visibleRowsNumber = 0;
    
    colorSamplesRows.forEach(row => {
        if(isRowHidden(row)) {
            return;
        }
        else {
            visibleRowsNumber++;
        }
    });

    return visibleRowsNumber;
}

function isRowHidden(row) {
    if(row.classList.contains("color-samples__row_hidden")) {
        return true;
    }
    else {
        return false;
    }
}