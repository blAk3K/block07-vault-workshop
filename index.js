/* write a equation that includes the combo to the vault to the user.*/

const secret ="You have received this message because you have been chosen to open an important vault. Here is the secret combination";

// window.alert(secret)
// should make popup with the text from const secret

const codeOne = 5*2;
//  makes 10
const codeTwo = 60-20;
//  makes 40
const codeThree = 30+9;
// makes 39
// code is 10-40-39

// console.log(codeOne, codeTwo, codeThree);

const secretCombo = " " + codeOne + " " + codeTwo + " " + codeThree;
alert(secret + secretCombo);