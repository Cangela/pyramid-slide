function determineHeight(heightStr) {

    // just so we know we're here

    // TODO 3
    // figure out the height the user typed (replace the "5" below)
    //heightStr =
    heightStr = document.getElementById('height').value;
    height = parseInt(heightStr);
    //document.getElementById("pyramid").innerHTML = drawPyramid(height);

    // here we convert the string to an int
    //height = parseInt(heightStr);

    // TODO 2
    // draw the pyramid with the given height
    //drawPyramid(height);
    drawPyramid(height);
}

function drawPyramid(height) {

    // TODO
    // print that pyramid!
    document.getElementById("pyramid").innerHTML = "";
    var symbol = document.getElementById("symbol").value;

    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
           rowStr += "\xa0"; // QUIZ: what happens if we use a space (" ") instead of a period?
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
