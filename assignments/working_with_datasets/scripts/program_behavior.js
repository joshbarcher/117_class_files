//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//the index of the current object shown
//on the web page
let index = 0;

//responds to clicks of the "previous" button
previous.onclick = function(event) {
    index--;

    //make sure that index is never less than zero...

    display();
}

//responds to clicks of the "next" button
next.onclick = function(event) {
    index++;

    //make sure that index is never greater than
    //array.length - 1

    display();
}

//shows the current record in the array of records
//at the position within the index variable
function display()
{
    //NOTE: Your code that displays a record on the page should
    //only go here and not elsewhere
    console.log("Next index is " + index);
}

//NOTE: Your code that calculates and displays interesting
//fact(s) should go here and not elsewhere
