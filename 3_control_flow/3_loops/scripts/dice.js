let button = document.querySelector("button");
button.onclick = function(event) {
    //stop the form from submitting
    event.preventDefault();

    //get our DOM elements
    let diceArea = document.querySelector(
        "section.dice-area");
    diceArea.innerHTML = "";
    let target = document.querySelector("#target");
    target = target.value;

    //write a loop that adds rolled dice until
    //the target number appears

    let randomNum = 0;
    while (randomNum != target)
    {
        //get a random number from 1-6
        randomNum = Math.floor(Math.random() * 6) + 1;
        diceArea.innerHTML += "<img src='images/" +
            randomNum + ".png' alt='A die'>"
    }
};

