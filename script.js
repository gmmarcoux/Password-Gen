// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);


// Assignment code her
//variables  
var confirmNumeric;
var confirmUppercase;
var confirmLowercase;
var confirmSpecialCharacter;
var length;
var criteria;

//variable values
var Lowercasealpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppercasealpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var SpecialCharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", "<", ">", "/", "?", ".", ",", "[", "[", "{", "}", "_"];

function generatePassword() {
  
  //PW length
  length = parseInt(prompt("Password Length - Must be between 8 to 128"));
  if (!length) {
    alert("Please enter a value to continue");
  } else if (length < 8 || length > 128) {
    length = parseInt(prompt("8 - 128 characters"));
  }

  //PW criteria
  var confirmUppercase = confirm("Would you like Uppercase letters in your password? Click 'OK' or press the Enter key to confirm, and 'Cancel' to say no.");
  var confirmLowercase = confirm("Would you like Lowercase letters in your password? Click 'OK' or press the Enter key to confirm, and 'Cancel' to say no.");
  var confirmNumeric = confirm("Would you like Numbers in your password? Click 'OK' or press the Enter key to confirm, and 'Cancel' to say no.");
  var confirmSpecialCharacter = confirm("Would you like Special Characters in your password? This includes symbols that some protected sites might not permit. Click 'OK' or press the Enter key to confirm, and 'Cancel' to say no.")

  //if no criteria is selected...
  if (!confirmUppercase && !confirmLowercase && !confirmNumeric && !confirmSpecialCharacter) {
    criteria = alert("Please select at least one of the previous criteria (Uppercase, Lowercase, Numbers, or Special Characters) listed to continue.");
  }

  //CONDITIONS (else if statements)

  //if all criteria is selected...
  else if (confirmUppercase && confirmLowercase && confirmNumeric && confirmSpecialCharacter) {
    criteria = Uppercasealpha.concat(Lowercasealpha, Numeric, SpecialCharacter);
  }
  //if 1 criteria is selected...
  else if (confirmUppercase) {
    criteria = Uppercasealpha;
  }
  else if (confirmLowercase) {
    criteria = Lowercasealpha;
  }
  else if (confirmNumeric) {
    criteria = Numeric;
  }
  else if (confirmSpecialCharacter) {
    criteria = SpecialCharacter;
  }
  //if 2 criteria are selected...
  //UP+LW, UP+NUM, UP+SP, LW+NUM, LW+SP, NUM+SP
  else if (confirmUppercase && confirmLowercase) {
    criteria = Uppercasealpha.concat(Lowercasealpha);
  }
  else if (confirmUppercase && confirmNumeric) {
    criteria = Uppercasealpha.concat(Numeric);
  }
  else if (confirmUppercase && confirmSpecialCharacter) {
    criteria = Uppercasealpha.concat(SpecialCharacter);
  }
  else if (confirmLowercase && confirmNumeric) {
    criteria = Lowercasealpha.concat(Numeric);
  }
  else if (confirmLowercase && confirmSpecialCharacter) {
    criteria = Lowercasealpha.concat(SpecialCharacter);
  }
  else if (confirmNumeric && confirmSpecialCharacter) {
    criteria = Numeric.concat(SpecialCharacter);
  }
  //if 3 criteria are selected...
  //UP+LW+NUM, UP+LW+SP, UP+NUM+SP, LW+NUM+SP
  else if (confirmUppercase && confirmLowercase && confirmNumeric) {
    criteria = Uppercasealpha.concat(Lowercasealpha, Numeric);
  }
  else if (confirmUppercase && confirmLowercase && confirmSpecialCharacter) {
    criteria = Uppercasealpha.concat(Lowercasealpha, SpecialCharacter);
  }
  else if (confirmUppercase && confirmNumeric && confirmSpecialCharacter) {
    criteria = Uppercasealpha.concat(Numeric, SpecialCharacter);
  }
  else if (confirmLowercase && confirmNumeric && confirmSpecialCharacter) {
    criteria = Lowercasealpha.concat(Numeric, SpecialCharacter);
  }
  
  
  //loop to choosen password
  var password = [];
  for(var i = 0; i < length; i++) {
    var choosencriteria = criteria[Math.floor(Math.random() * criteria.length)];
    password.push(choosencriteria);
    window.alert(password)
  }
}

console.log(password);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}