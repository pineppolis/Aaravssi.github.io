const myheading = document.querySelector('h1');
myheading.textContent ="Hello World!";
let Wow = "Tales Of the Farlands!";
myheading.textContent = Wow;
setTimeout(() => {
    if(1+3%2===0){ // BODMAS applies
        alert('Why are you here?') // 1st Option
    }
    else{
        alert('One Wrong Turn and You can\'t turn around') // 2nd Option
    }
}, 100);

function maths(num1, num2){ // The variables that will be later defined while function usage like : maths(1, 2)
    let wowboo = num2 * num1; // Declaring a variable containing the variables later decided which are multiplied
    let result = wowboo/num1; // Another calculation dividing the previous variable with the later defined variable
    return result; // The value to be returned after the function is performed
}
const answer = maths(1,2); // Declaring a variable containing the values of the function and its answer
const answering = document.querySelector('#Answer') // Connecting the constant answering to the id #Answer
answering.textContent = answer; // Filling the answer in the .textcontent
var a = !(12>14)? (window.open()): alert('The operation was brought to a halt')