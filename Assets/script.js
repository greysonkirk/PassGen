//Set arrays to choose from 
let lowChar = ["abcdefghijklmnopqrstuvwxyz"];
let capChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specChar = ["!", "@", "#", "$", "%", "^", ">", "<", "&", "*", "(", ")", "?"]


// user prompts 
let charLim = prompt("Select character amount between 8 and 128?");
while (isNaN(charLim) || charLim < 8 || charLim > 128) charLim = Number(prompt("Length MUST be between 8-128 character!!!"));


let lowWant = confirm("Do you want lowercase characters?");
let upWant = confirm("Do you want uppercase characters?");
let specWant = confirm("Do you want special characters?");
let numWant = confirm("Do you want number characters?");

while (!lowWant && !upWant && !numWant && !specWant) {
    alert("You MUST choose at least one character type!!!")
    lowWant = confirm("Do you want lowercase characters?");
    upWant = confirm("Do you want uppercase characters?");
    specWant = confirm("Do you want special characters?");
    numWant = confirm("Do you want number characters?");
}




for (let i = 0; i < charLim.value; i++) {
    const value = charLim[i];
    console.log()
}


// Assignment Code2012
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);