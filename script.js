// Assignment code here

//variables  
var confirmNumeric;
var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacter;

//variable values
var Lowercasealpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppercasealpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var SpecialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", "<", ">", "/", "?", ".", ",", "[", "[", "{", "}", "_"];

function generatePassword() {
  //PW length
  enter = parseInt(prompt("Password Length - Must be between 8 to 128"));
  if (!enter) {
    alert("Please enter a value to continue");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("8-128 characters"));
  }

  //PW criteria
  var confirmUppercase = confirm("Would you like Uppercase letters in your password? Click 'OK' or press the Enter key to confirm, and 'Cancel' to say no.");
  var confirmLowercase = confirm("Would you like Lowercase letters in your password? Click 'OK' or press the Enter key to confirm, and 'Cancel' to say no.");
  var confirmNumeric = confirm("Would you like Numbers in your password? Click 'OK' or press the Enter key to confirm, and 'Cancel' to say no.");
  var confirmSpecialCharacter = confirm("Would you like Special Characters in your password? This includes symbols that some protected sites might not permit. Click 'OK' or press the Enter key to confirm, and 'Cancel' to say no.")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
