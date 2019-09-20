"use strict";

import { setNewRGBcodeTextContent } from '../../rgb-code/rgb-code.js';
import { appendColorsToSamples } from '../../color-samples/color-samples.js';

let shuffleButton = document.querySelector(".game-console__button_shuffle");

shuffleButton.addEventListener("click", () => {
    setNewRGBcodeTextContent();
    appendColorsToSamples();
});