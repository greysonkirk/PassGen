//Set arrays to choose from 
let lowChar = ["abcdefghijklmnopqrstuvwxyz"];
let capChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numChar = ["0123456789"];
let specChar = ["!@#$%^><&*()?"];
// let specChar = ["!", "@", "#", "$", "%", "^", ">", "<", "&", "*", "(", ")", "?"]


function generatePassword() {
    // user prompts 
    // get character limit and make sure its between 8 and 128 
    let charLim = prompt("Select character amount between 8 and 128?");
    while (isNaN(charLim) || charLim < 8 || charLim > 128) charLim = Number(prompt("Length MUST be between 8-128 character!!!"));

    // confirming what character type user wants 
    let lowWant = confirm("Do you want lowercase characters?");
    let upWant = confirm("Do you want uppercase characters?");
    let specWant = confirm("Do you want special characters?");
    let numWant = confirm("Do you want number characters?");
    // check user input and make sure at least one option was chosen
    while (!lowWant && !upWant && !numWant && !specWant) {
        alert("You MUST choose at least one character type!!!")
        lowWant = confirm("Do you want lowercase characters?");
        upWant = confirm("Do you want uppercase characters?");
        specWant = confirm("Do you want special characters?");
        numWant = confirm("Do you want number characters?");
    }

    // setting password variables
    var passRes = "";
    var wanted = [];
    // adding characters the user chose to wanted variable
    if (lowWant) wanted += (lowChar)
    if (upWant) wanted += (capChar)
    if (specWant) wanted += (specChar)
    if (numWant) wanted += (numChar)
        //for loop looping through wanted string the selected character amount and adding random characters to passRes variable 
    for (let i = 0; i < charLim; i++) {
        resChar = wanted[Math.floor(Math.random() * wanted.length)];
        passRes += resChar;
    }
    //setting the password text in the text area with id password and setting passwordText to the passRes variable 
    var passwordText = document.querySelector("#password");
    passwordText.value = passRes
}


// Assignment Code2012
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);