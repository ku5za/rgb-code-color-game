'use strict';

import { showHardLevelRow, hideHardLevelRow } from '../../color-samples/__row/color-samples__row.js';
import { setNewRGBcodeTextContent } from '../../rgb-code/rgb-code.js';
import { appendColorsToSamples } from '../../color-samples/color-samples.js';

let levelButtons = document.querySelectorAll('.game-console__level-buttons > .game-console__button');

function whichLevelIsActiveNow() {
    let currentActiveLevel = document.querySelector('.game-console__button_active');

    return currentActiveLevel;
}

function setButtonAsActive(level) {
    let currentActiveLevel = whichLevelIsActiveNow();

    currentActiveLevel.classList.remove("game-console__button_active");
    level.classList.add("game-console__button_active");

    if(level.classList.contains("game-console__button_hard")) {
        showHardLevelRow();
    }
    else {
        hideHardLevelRow();
    }
}

for(const button of levelButtons) {
    button.addEventListener("click", () => {
        setButtonAsActive(button);
        setNewRGBcodeTextContent();
        appendColorsToSamples();
    });
}