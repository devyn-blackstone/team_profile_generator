const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// const employeeInfo = () => {
// prompt()
//     .then((response) => fs.appendFile('index.html', HTMLFile(response)))
//     .then(() => console.log('Appended Info to site'))
//     .catch((err) => console.error(err));
// };
  
// employeeInfo();

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the team managers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the team managers id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the team managers email?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is team managers office number?',
    },
    {
        type: 'list',
        name: 'title',
        message: 'What type of team member do you want to add?',
        choices: ['Intern', "Engineer", "I'm done adding team members"]
    },
  ])
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
</head>
<body>
  <header>My Team</header>
  <div class="card" style="width: 18rem;">
    <div class="card-header">
        ${answers.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${answers.id}</li>
        <li class="list-group-item">Email: ${answers.email}</li>
        <li class="list-group-item">${answers.officeNumber}</li>
    </ul>
   </div>

   <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptManager()
    .then((answers) => writeFileAsync('./dist/index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();