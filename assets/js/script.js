// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  var length = prompt("How long should the password be?"),
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    if (length < 8 || length > 128) {
      var length = prompt("How long should the password be? (Select a number between 8 and 128)")
    }
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
