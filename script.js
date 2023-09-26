// grabbing the generate button for use later
const generatePromptsBtn = document.querySelector("#generatePrompts");
const generateBtn = document.querySelector("#generatePassword");

// grabbing the inputs for password specification and the password itself 
const passwordLength = document.querySelector("#lengthPassword");
const charSetLower = document.querySelector("#lowercase");
const charSetHigher = document.querySelector("#uppercase");
const charSetNum = document.querySelector("#numbers");
const charSetSpecial = document.querySelector("#special");
const passwordDisplay = document.querySelector("#password");
const displayPrompts = document.querySelector(".inputs");

// creating variables to be used in password generation
const charLower = "abcdefghijklmnopqrstuvwxyz"
const charHigher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const charNum = "0123456789"
const charSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// function that generates the password by creating a for loop which grabs the password generation values to create a unique password containing the specified requirements

function GeneratePassword() {
// let values are creating an empty string value to be replaced with for loop generation to create the password
  const minLength = 8;
  const maxLength = 128;


  let password = "";
  let passLength = passwordLength.value;
  if (passLength < minLength || passLength > maxLength ) {
    return alert('Invalid Password Length')
  }
  let passwordChar = "";
// passwordChar generates an empty string to be replaced if conditions are met, ? used to see if checked or not, : (after) displaying what to input if false
  passwordChar += charSetLower.checked ? charLower : ""
  passwordChar += charSetHigher.checked ? charHigher : ""
  passwordChar += charSetNum.checked ? charNum : ""
  passwordChar += charSetSpecial.checked ? charSpecial : ""

// for the length of the password, let values will create a random character index to be selected and joined together using the substring method
  for (let i = 0; i <= passLength; i++) {
    let values = Math.floor(Math.random() * passwordChar.length);
    password += passwordChar.substring(values, values + 1);
  }

// assigns the password id value with the newly created password
  passwordDisplay.value = password;
}

// this function will display the hidden html elements
function DisplayPrompts() {
  displayPrompts.hidden = false;
  generateBtn.hidden = false;
  generatePromptsBtn.hidden = true;


}

// when the first generate password button is clicked it will run the displayprompts function to hide the false button and reveal the functional inputs and generate password button
generatePromptsBtn.addEventListener("click", DisplayPrompts )
// when the function generate button is clicked it will run the function that creates the password
generateBtn.addEventListener("click", GeneratePassword)


