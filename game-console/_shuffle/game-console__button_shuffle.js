"use strict";

import { setNewRGBcodeTextContent } from '../../rgb-code/rgb-code.js';
import { appendColorsToSamples } from '../../color-samples/color-samples.js';
import { resetGuessedColorSamples } from '../../color-samples/__color-sample/color-samples__color-sample.js';

let shuffleButton = document.querySelector(".game-console__button_shuffle");

shuffleButton.addEventListener("click", () => {
    resetGuessedColorSamples();
    setNewRGBcodeTextContent();
    appendColorsToSamples();
});