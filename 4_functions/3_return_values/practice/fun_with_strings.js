function capitalize(theString) {
    let updated = theString.toUpperCase();
   return updated;
}

function append(theString, newContent)
{
    let updated = theString + newContent;
    return updated;
}

function prepend(theString, newContent) {
let updated = newContent + theString;
return updated;
}

function replace(theString)
{
            //replace vowels with special characters
        theString = theString.replace("a", "@");
        theString = theString.replace("A", "@");

        theString = theString.replace("e", "&");
        theString = theString.replace("E", "&");

    theString = theString.replace("i", "!");
    theString = theString.replace("I", "!");

    theString = theString.replace("o", "()");
    theString = theString.replace("O", "()");

    theString = theString.replace("u", "#");
    theString = theString.replace("U", "#");

    return theString;
}