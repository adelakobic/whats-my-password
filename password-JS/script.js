// Assignment Code
// generateBtn links to HTML generate button line 31 
var generateBtn = document.querySelector("#generate");

//window prompt opening message

var userPrompt = window.prompt("Would you like to generate a new passowrd?", "yes or no");

function generatePassword(){
  console.log("Welcome to 'What's my password?'");

  // 1 prompt user for password criteria
  //     a password length between 8 and 128 characters
  //     b uppercase, lowercase, numbers, special characters
  // 2 validate the input (from 1)
  // 3 genertae the actual password


  // 4 display the generated password on the page 

  return "Generated password will appear here!";
}

// Write password to the #password input (links to line 26 in HTML)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Links to generate password function
generateBtn.addEventListener("click", writePassword);
