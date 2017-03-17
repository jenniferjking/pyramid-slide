var heightElem = document.getElementById("height");
var brickElem = document.getElementById("brick_symbol");



//initially loads pyramid at default height and brick
drawPyramid(parseInt(heightElem.value), brickElem.value);

//Causes pyramid to reload when brick is changed
brickElem.onchange = function(event) {
    drawPyramid(parseInt(heightElem.value), brickElem.value);
}

//causes pyramid to reload when height is changed
heightElem.oninput = function(event){
    drawPyramid(parseInt(heightElem.value), brickElem.value);
}

function drawPyramid(height, brick_symbol) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    document.getElementById("slider_num").innerHTML=("&nbsp" + "&nbsp" + heightElem.value);

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick_symbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}