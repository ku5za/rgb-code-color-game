'use strict';

import { getActualRGBcodeTextContent } from "./../../rgb-code/rgb-code.js";

export function compareToDrawnRGBcode(colorSample) {
    if(matchesDrawnRGBcode(colorSample)) {
        markCorrectGuessedColorSample(colorSample);
    }
    else {
        disableWrongGuessedColorSample(colorSample);
    }
}

function matchesDrawnRGBcode(colorSample) {
    let actualRGBcode = getActualRGBcodeTextContent();
    
    console.log("%c\"" + colorSample.style.backgroundColor + "\"", "color: " + colorSample.style.backgroundColor);

    if(actualRGBcode === colorSample.style.backgroundColor.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
}

function markCorrectGuessedColorSample(colorSample) {
    colorSample.classList.add("color-samples__color-sample_checked");
}

function disableWrongGuessedColorSample(colorSample) {
    colorSample.classList.add("color-samples__color-sample_disabled");
}