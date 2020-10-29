//Set arrays to choose from 
let lowChar = ["abcdefghijklmnopqrstuvwxyz"];
let capChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specChar = ["!@#$%^><&*()?"]
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
    var password = "";
    // let criteria = {
    //     length: charLim,
    //     lower: lowWant,
    //     upper: upWant,
    //     number: numWant,
    //     special: specWant
    // }
    // console.log(criteria)
    var wanted = [];
    if (lowWant) password += (lowChar)
    if (upWant) password += (capChar)
    if (specWant) password += (specChar)
    if (numWant) password += (numChar)

    for (let i = 0; i <= charLim; i++) {
        password = password[Math.floor(Math.random() * password.length)];

    }
    console.log(password);
}


// Assignment Code2012
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var genPass = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = genPass;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);