'use strict';

let hardLevelRow = document.querySelectorAll(".color-samples__row")[1];

export function showHardLevelRow() {
    hardLevelRow.classList.remove("color-samples__row_hidden");
}

export function hideHardLevelRow() {
    hardLevelRow.classList.add("color-samples__row_hidden");
}