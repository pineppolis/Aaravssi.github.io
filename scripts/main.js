/*const myheading = document.querySelector('h1'); // Declaring a constant called myheading which now contains h1
myheading.textContent ="Hello World!"; // Attaching a new value to the text context of myheading, a constant
let Wow = "Tales Of the Farlands!"; // A new value proving for it can later be changed, the command is under a comment because it serves no purpose and has a better alternative*
myheading.textContent = Wow;*/ // It works!
document.querySelector('h1').textContent = "Tales Of The Farlands!"; // Works, selecting the function then adding a dot in between to tell what to add
let cpic = document.querySelector('#c-pic');
cpic.onclick = () =>{
    let src = cpic.getAttribute('src');
    if (src=== '/images/picture1-.png'){
    cpic.setAttribute('src', '/images/picture2-.png');
    } else {
    cpic.setAttribute('src', '/images/picture1-.png'); }
    }
/*setTimeout(() => {
    if(1+3%2===0){ // BODMAS applies
        alert('Why are you here?') // 1st Option
    }
    else{
        alert('One Wrong Turn and You can\'t turn around') // 2nd Option
    }
}, 100); // The 100 here is the time before it's executed
function maths(num1, num2){ // The variables that will be later defined while function usage like : maths(1, 2)
    let wowboo = num2 * num1; // Declaring a variable containing the variables later decided which are multiplied
    let result = wowboo/num1; // Anoter calculation dividing the previous variable with the later defined variable
    return result; // The value to be rheturned after the function is performed
}
const answer = maths(1,2); // Declaring a variable containing the values of the function and its answer
const answering = document.querySelector('#Answer') // Connecting the constant answering to the id #Answer
answering.textContent = answer; // Filling the answer in the .textcontent
function openwindow (){
    let windowFeatures = "popup";
    let openwin = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=3s", windowFeatures);
    return openwin;
} // Testing stage
let a = (12>14)? openwindow : alert('The operation was brought to a halt');
document.querySelector('html').addEventListener('click', () => {
    (1+3%2===0)? alert('The statement "1+3%2===0" is true') : alert ('The statement "1+3%2===0" was proved to be false');
    alert(1+419);
})*/

