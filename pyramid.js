function findHeightSymbol() {

    // figure out the height the user typed
    heightStr = document.getElementById('height').value;

    // here we convert the string to an int


    height = parseInt(heightStr);
    document.getElementById("rangeHeight").innerHTML = height;
    var symbol = document.getElementById("symbol").value;



    // draw the pyramid with the given height
    drawPyramid(height, symbol);
}


function drawPyramid(height, symbol) {

    // print that pyramid!


    document.getElementById("pyramid").innerHTML = "";


    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
           rowStr += "\xa0\xa0";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        textElem = document.createTextNode(rowStr);

               // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

               // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);

        }
}
