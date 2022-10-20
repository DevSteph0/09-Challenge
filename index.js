// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown.js');
console.log('These questions presented are used to generate a progfessional read me')

// TODO: Create an array of questions for user input
const questions = [
    
    {   
        type:'Input',
        name:'Tittle',
        message:'Desired name for the project',
        validate: your_input => {
            if (your_input) {
                return true;
            }else{
                console.log('enter the name of the project to procced')
                return false;
            }
        }
   }, 
   {   
    type:'Input',
    name:'Descripton',
    message:'If you had to summerized the project really quickly to someone with no experience how would you do so?',
    validate: your_Descripton=> {
        if (your_Descripton) {
            return true;
        }else{
            console.log('Descripton of  README')
            return false;
        }
    }
},
{   
    type:'Input',
    name:'Installation',
    message:'How to install README',
    validate: your_Useability => {
        if (your_Useability) {
            return true;
        }else{
            console.log('enter the name of the project to procced')
            return false;
        }
    }
},{   
    type:'Input',
    name:'Issues & Debugging',
    message:'Problems encountered and potential solutions',
    validate: your_input => {
        if (your_input) {
            return true;
        }else{
            console.log('')
            return false;
        }
    }
},   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName,data, (err) =>{
        if (err){
            return console.log(err)
        }
    console.log('Great! now its easier to create README files')
    });


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('READ.md', generateMarkdown(userInput));
    });
}

// Function call to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    }];
;
