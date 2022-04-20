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

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school did you go to?',
    },
  ]);
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
        <li class="list-group-item">${answers.school}</li>
    </ul>
   </div>

</body>
</html>`;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();