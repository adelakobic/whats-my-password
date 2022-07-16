// Assignment Code
// generateBtn links to HTML generate button line 31 
var generateBtn = document.querySelector("#generate");

//window prompt opening message

var userPrompt = window.prompt("Create a new password?", "Type 'yes'and click 'OK' ");
var userPrompt = {
  answer: ["Yes", "y", "Y"]
}
//If user presses Cancel box dissapears and no password generated

//If user types YES and clicks 'OK' it should lead to password character prompts
if (userPrompt.answer) {
  generatePassword()
}


function generatePassword(){
  console.log("Welcome to 'What's my password?'");

  return "Generated password will appear here!";
}

 // 1 prompt user for password criteria
  //     a password length between 8 and 128 characters
  function passwordLength(){
    console.log("Password length will be between 8 and 128 characters.");
  }

  //     b uppercase (26 letters), lowercase, numbers (10), special characters
  function passwordUpper(){
    return String.fromCharCode(Math.floor(Math.random)* 26 + 65);
  }
  //console.log(passwordUpper());

  function passwordLower(){
    return String.fromCharCode(Math.floor(Math.random) * 26 + 97);
  }
//console.log(passwordLower());

  function passwordNumbers(){
    return String.fromCharCode(Math.floor(Math.random) * 10 + 48);
  }
  //console.log(passwordNumbers());
  

  function passwordSpecial(){
    const symbols = '!@£#$%^&*(){}[]=+/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  // 2 validate the input (from 1)
  // 3 generate the actual password
  // 4 display the generated password on the page 

// Write password to the #password input (links to line 26 in HTML)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Links to generate password function
generateBtn.addEventListener("click", writePassword);
