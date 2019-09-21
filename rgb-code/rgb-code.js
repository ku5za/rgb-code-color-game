'use strict';

export let rgbCode = document.querySelector(".rgb-code");

export function setNewRGBcodeTextContent() {
    rgbCode.textContent = createNewRGBcode();
}
setNewRGBcodeTextContent();

export function createNewRGBcode() {
    let color = drawRGBcolor();

    let rgbCode = "RGB(" + color.red + ", " + color.green + ", " + color.blue + ")";

    return rgbCode;
}

function drawRGBcolor() {
    return {
        red: getRandomInt(256),
        green: getRandomInt(256),
        blue: getRandomInt(256)
    }
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function getActualRGBcodeTextContent() {
    return document.querySelector(".rgb-code").textContent;
}