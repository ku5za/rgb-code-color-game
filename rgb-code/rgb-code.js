(() => {
    let rgbCode = document.querySelector(".rgb-code");

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function drawRGBcolor() {
        return {
            red: getRandomInt(256),
            green: getRandomInt(256),
            blue: getRandomInt(256)
        }
    }

    function createRGBcode() {
        let color = drawRGBcolor();
        let rgbCode = "RGB(";

        rgbCode += color.red + ", ";
        rgbCode += color.green + ", ";
        rgbCode += color.blue + ")";

        return rgbCode;
    }

    rgbCode.textContent = createRGBcode();

    console.log("%c DOCUMENT CONNECTED", "color: red;");
})();