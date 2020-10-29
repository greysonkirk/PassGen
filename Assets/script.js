//Set arrays to choose from 
let lowChar = ["abcdefghijklmnopqrstuvwxyz"];
let capChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numChar = ["0123456789"];
let specChar = ["!@#$%^><&*()?"];
// let specChar = ["!", "@", "#", "$", "%", "^", ">", "<", "&", "*", "(", ")", "?"]


function generatePassword() {
    // user prompts 
    let charLim = prompt("Select character amount between 8 and 128?");
    while (isNaN(charLim) || charLim < 8 || charLim > 128) charLim = Number(prompt("Length MUST be between 8-128 character!!!"));


    let lowWant = confirm("Do you want lowercase characters?");
    let upWant = confirm("Do you want uppercase characters?");
    let specWant = confirm("Do you want special characters?");
    let numWant = confirm("Do you want number characters?");
    // check user input
    while (!lowWant && !upWant && !numWant && !specWant) {
        alert("You MUST choose at least one character type!!!")
        lowWant = confirm("Do you want lowercase characters?");
        upWant = confirm("Do you want uppercase characters?");
        specWant = confirm("Do you want special characters?");
        numWant = confirm("Do you want number characters?");
    }

    // console.log(criteria)
    var passRes = "";
    var wanted = [];
    if (lowWant) wanted += (lowChar)
    if (upWant) wanted += (capChar)
    if (specWant) wanted += (specChar)
    if (numWant) wanted += (numChar)

    for (let i = 0; i < charLim; i++) {
        resChar = wanted[Math.floor(Math.random() * wanted.length)];
        passRes += resChar;
    }
    console.log(passRes)
    console.log(wanted)
    var passwordText = document.querySelector("#password");
    passwordText.value = passRes
}


// Assignment Code2012
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {

//     var passwordText = document.querySelector("#password");
//     passwordText.value = password;
//     console.log(passwordText);

// }



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);