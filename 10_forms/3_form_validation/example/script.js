window.onload = function() {
    let button = document.getElementById("send-data");
    button.onclick = validateForm;
}

function validateForm(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //validate the form...
}

