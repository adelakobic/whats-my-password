// Assignment Code
// generateBtn links to HTML generate button line 31 
var generateBtn = document.querySelector("#generate");


//window prompt opening message
  //var userPrompt = window.prompt("Create a new password?", "Click 'OK' for YES, click 'Cancel' for NO. ");
  //var userText = function () {
  //Text ["Yes", "y", "Y"]
  //}
  //if (userText === "Yes", "y", "Y") {


  //If user presses Cancel box dissapears and no password generated
  //else if (!userText) { return;}

  //If user types YES and clicks 'OK' it should lead to password character prompts
  //if (userPrompt.userText) {
    generatePassword()
  


  function generatePassword(){
  console.log("Welcome to 'What's my password?'");

  return "Generated password will appear here!";
  }

  // 1. prompt user for password criteria
  var passwordLength = window.prompt("Set password length between 8 and 128 characters.", "Type in number");
  
  //     a password length between 8 and 128 characters
  //function passwordLength(){
    //min: 8
    //max: 128
  
  //is the mesaage a text or alert?
  if (passwordLength < 8) {
    
    alert("Password length must be 8 characters in length MINIMUM.");
  } 
  //change to alerts
  
  else if (passwordLength > 128) {
    alert("Password length must be 128 characters MAX or less.");
  } 
  //put in a loop to go back to initial prompt


  var passwordUpper = window.confirm("Include UPPERCASE letters? Click 'OK' for YES, click 'Cancel' for NO. ");
  //window.alert("Include Uppercase letters?", "Click OK");
  // change vars and functions 
  // add in pseudo code for all
  // window.confirm

  //     b uppercase (26 letters), lowercase, numbers (10), special characters
  function passwordUpperFunc(){
    return String.fromCharCode(Math.floor(Math.random)* 26 + 65);
  }
  if (passwordUpper) {
    console.log("Password will contain UPPERCASE letters.");
  } 

  else {
  console.log()

  }
  console.log(passwordUpperFunc());
  
  
  var passwordLower = window.prompt("Include lowercase letters? Click 'OK' for YES, click 'Cancel' for NO.");
  function passwordLowerFunc(){
    return String.fromCharCode(Math.floor(Math.random) * 26 + 97);
  }

  var userPrompt = window.prompt("Include numbers?", "Click 'OK' for YES, click 'Cancel' for NO. ");
  function passwordNumbers(){
    return String.fromCharCode(Math.floor(Math.random) * 10 + 48);
  }
  
  var userPrompt = window.prompt("Click on the RED Generate Password button.")
  function passwordSpecial(){
    const symbols = '!@£#$%^&*(){}[]=+/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  // 2 validate the input (from 1)
  function generatePassword(){
    //console.log( passwordLength = passwordUpper + passwordLower + passwordNumbers + passwordSpecial);
    if (Password = includes.passwordUpper.passwordLower.passwordNumbers.passwordSpecial)
    return "Generated password will appear here!";
    }
  // 3 generate the actual password
  // 4 display the generated password on the page 

  // Write password to the #password input (links to line 26 in HTML)
  function writePassword() {
  var password = generatePassword(addEventListener);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }

// Add event listener to generate button
// Links to generate password function
generateBtn.addEventListener("click", writePassword);
