'use strict';

export let rgbCode = document.querySelector(".rgb-code");

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function drawRGBcolor() {
    return {
        red: getRandomInt(256),
        green: getRandomInt(256),
        blue: getRandomInt(256)
    }
}

export function createNewRGBcode() {
    let color = drawRGBcolor();
    let rgbCode = "RGB(";

    rgbCode += color.red + ", ";
    rgbCode += color.green + ", ";
    rgbCode += color.blue + ")";

    return rgbCode;
}

export function setNewRGBcodeTextContent() {
    rgbCode.textContent = createNewRGBcode();
}
setNewRGBcodeTextContent();

console.log("%c RGB-CODE CONNECTED", "color: red;");