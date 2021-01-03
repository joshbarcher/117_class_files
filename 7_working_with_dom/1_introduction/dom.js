//select the body element
let body = document.body;
console.log(body.tagName);  //body
console.log(body.nodeType); //1

//select all elements under body (in an array like structure)
let elements = document.querySelectorAll("*");
for (let i = 0; i < elements.length; i++)
{
    let element = elements[i];
    console.log(element.tagName);  //???
    console.log(element.nodeType); //1
}

