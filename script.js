document.getElementById("form-sayThatNumber").addEventListener("submit", sayThatNumber);

// main function that is attached to the form submit event
function sayThatNumber(event){
    event.preventDefault(); // prevent the form from submitting
    var val = document.getElementById('numberEntry').value; // get the input value as a string
    var num = parseInt(val); // convert the val to a number
    var result = ''; // no results yet

    // enter your code here
    // it's a good idea to break up the program into smaller function for each step. Add more functions if they're needed;



    // output the final result
    document.getElementById('result').innerHTML = result;
}