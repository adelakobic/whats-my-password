// Assignment Code
// generateBtn links to HTML generate button line 31 
var generateBtn = document.querySelector("#generate");


//window prompt opening message
  var userPrompt = window.prompt("Create a new password?", "Click 'OK' for YES, click 'Cancel' for NO. ");
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

  //const section - is it needed??? not sure
  const randomFunc = {
    upper: passwordUpper,
    lower: passwordLower,
    number: passwordNumbers,
    special: passwordSpecial
  }

  // 1 prompt user for password criteria
  var userPrompt = window.prompt("Set password length between 8 and 128 characters.", "Type in number");
  
  //     a password length between 8 and 128 characters
  function passwordLength(){
    min: 8
    max: 128
  }
  //is the mesaage a text or alert?
  if (number < 8) {
  }
      //Text = "Password length must be 8 characters in length MINIMUM."} 
  else if (number > 128) {
    alert = "Password length must be 128 characters MAX or less."}

  var userPrompt = window.prompt("Include UPPERCASE letters? Click 'OK' for YES, click 'Cancel' for NO. ");
  //window.alert("Include Uppercase letters?", "Click OK");

  //     b uppercase (26 letters), lowercase, numbers (10), special characters
  function passwordUpper(){
    return String.fromCharCode(Math.floor(Math.random)* 26 + 65);
  }
  //console.log(passwordUpper());
  
  var userPrompt = window.prompt("Include lowercase letters? Click 'OK' for YES, click 'Cancel' for NO.");
  //window.alert("Include lowercase letters?", "Click OK")

  function passwordLower(){
    return String.fromCharCode(Math.floor(Math.random) * 26 + 97);
  }
  //console.log(passwordLower());

  var userPrompt = window.prompt("Include numbers?", "Click 'OK' for YES, click 'Cancel' for NO. ");
  //window.alert("Include numbers?", "Click OK")

  function passwordNumbers(){
    return String.fromCharCode(Math.floor(Math.random) * 10 + 48);
  }
  //console.log(passwordNumbers());
  
var userPrompt = window.prompt("Click on the RED Generate Password button.")
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
