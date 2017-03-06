
printPyramid(8);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
 height = 8
function printPyramid(height) {
    //console.log("Uh oh... the pyramid is under construction.");
    //console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

            var inner_row_Str =  document.createElement("p");
            inner_row_Str.innerHTML = rowStr;
            var pyramid = document.getElementById("pyramid");
            pyramid.appendChild(inner_row_Str);
        }
        //console.log(string);

    
}


/* function printPrymid(height) {
    // height is the number of rows. For each row..
    for (var row = 0; row < height; row++) {

    //figure out how many bricks in this
    }
}

function concat(char, count) {
    str = '';
    for (var i = 0; i < count; i++){
        str += char;
    }
    return str;
}

var rowStr = concat(' ', numSpaces) + concat('#', numBricks)
console.log(rowStr)
*/
