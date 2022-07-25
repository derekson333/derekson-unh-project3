// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  var length = prompt("How long should the password be?"),
        charset = "",
        retVal = "";
    if (length < 8 || length > 128) {
      var length = prompt("How long should the password be? (Select a number between 8 and 128)")
    }
    
    // Function to use confirm dialogs to choose the type of characters
    function selectCharset() {
      if (confirm("Do you want to include lowercase letters?")) {
      charset = charset + "abcdefghijklmnopqrstuvwxyz"
      }
      if (confirm("Do you want to include uppercase letters?")) {
        charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
      if (confirm("Do you want to include numbers?")) {
        charset = charset + "0123456789"
      }
      if (confirm("Do you want to include special characters?")) {
        charset = charset + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      }
      if (charset === "") {
        alert("You must choose at least one type of characters")
        selectCharset()
      }
    }
    
    // Calls the character type selection function
    selectCharset()

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
