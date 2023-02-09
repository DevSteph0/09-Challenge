import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';

function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents 
- [Title](#title)
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Future](#future)
- [Name](#name)
- [Questions](#questions)

## License:
${data.licenses}
## Description:
${data.description}
## Installation:
${data.installation}
## Future:
${data.future}
## Name:
${data.name}
## Questions:
- Github: [${data.github}](https://github.com/DevSteph0/09-Challenge)
- Email: [${data.email}](stephenounisapanda@gmail.com) `;
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Welcome to the README generator! input README title:',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              return false;
          }
      }
  },
{
  type: 'input',
  name: 'licenses',
  message: 'Almost done!Please provide licenses if not being used type n/a',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          return false;
      }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'Type a short or long description summarizing the project:',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          return false;
      }
  }
},
{
  type: 'input',
  name: 'installation',
  message: 'Link in read me or directions on how to run the application',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          return false;
      }
  }
},
{
  type: 'input',
  name: 'Proccesses',
  message: 'something that went well and something you might have struggled with:',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          return false;
      }
  }
},
{
  type: 'input',
  name: 'future',
  message: 'Potential future Development',
  validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          return false;
      }
  } 
},
{
type: 'input',
name: 'name',
message: 'Please provide name, your full name (ex..Shrek love)',
validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        return false;
    }
}
},
])
.then((data) => {
  const readmePageContent = generateMarkdown(data);

  fs.writeFile('READMEdemo.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created READMEdemo.md!')
  );
});
