// Assignment Code
// generateBtn links to HTML generate button line 31 
var generateBtn = document.querySelector("#generate");


//window prompt opening message 
//If user types YES and clicks 'OK' it should lead to password character prompts

  function generatePassword(){
  console.log("Welcome to 'What's my password?'");

  return "Generated password will appear here!";
  }

  // 1. prompt user for password criteria
  var passwordLength = window.prompt("Set password length between 8 and 128 characters.", "Type in number");
  
  //     a password length between 8 and 128 characters
  if (passwordLength < 8) {
  
    alert("Password length must be 8 characters in length MINIMUM.");
  } 
  //change to alerts
  
  else if (passwordLength > 128) {
    alert("Password length must be 128 characters MAX or less.");
  } 

  //put in a loop to go back to initial prompt **Loop is not working
  const actual = ['1', '2', '3', '4', '5'];
  for (let i = 0; actual.length; i++) {
    console.log('Loop');
    if (i === 5) break;

  }


  //     b uppercase (26 letters), lowercase, numbers (10), special characters - use ASCII chart 
  // uppercase to generate in password 
  var passwordUpper = window.confirm("Include UPPERCASE letters? Click 'OK' for YES, click 'Cancel' for NO. ");
  function passwordUpperFunc(){
    return String.fromCharCode(Math.floor(Math.random)* 26 + 65);
  }
  if (passwordUpper) {
    console.log("Password will contain UPPERCASE letters.");
  } 
  else {
  console.log("Uppercase NONE")
  }
  
  // lowercase - to generate in password
  var passwordLower = window.confirm("Password will contain lowercase letter.");
  function passwordLowerFunc(){
    return String.fromCharCode(Math.floor(Math.random) * 26 + 97);
  }
  if (passwordLower) {
    console.log("Password will contain lowercase letters.");
  } 
  else {
  console.log("Lowercase NONE")
  }

  // numbers - to generate in password
  var passwordNumbers = window.confirm("Password will contain numbers.");
  function passwordNumbersFunc(){
    return String.fromCharCode(Math.floor(Math.random) * 10 + 48);
  }
  if (passwordNumbers) {
    console.log("Password will contain numbers.");
  } 
  else {
  console.log("Numbers NONE")
  }
  
  // special chracters 
  var passwordSpecial = window.confirm("Password will contain special character.")
  function passwordSpecialFunc(){
    const symbols = '!@£#$%^&*(){}[]=+/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  if (passwordSpecial) {
    console.log("Password will contain special characters.");
  } 
  else {
  console.log("Special Characters NONE")
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
