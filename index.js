const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: "What's your project's title?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Write a brief description of your project.",
  },
  {
    type: 'input',
    name: 'installation',
    message: "Write any installation instructions.",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Write what the project is used for.",
  },
  {
    type: 'input',
    name: 'contribution',
    message: "Write any contribution guidelines.",
  },
  {
    type: 'input',
    name: 'test',
    message: "Write any test instructions.",
  },
  {
    type: 'list',
    name: 'license',
    message: "Which license should be used for this project?",
    choices: [
      "MIT",
      "GPLv2",
      "Apache",
      "GPLv3",
      "BSD 3-clause",
    ]
  },
  {
    type: 'input',
    name: 'github',
    message: "Write your github username.",
  },
  {
    type: 'input',
    name: 'email',
    message: "Write your email address.",
  },
];


inquirer.prompt(questions)
.then((data) => {
  console.log(data.name);
  console.log(data.GitHub);
  let answers = JSON.stringify(data, null, `\t`)

  fs.writeFile('README.md',
   `
    <h1 align="center">${data.projectTitle}<h1>

    ![badge](https://img.shields.io/badge/license-${data.license}-blue)

    ## Description
    ${data.description}

    ## Table of Contents
    - [Description](#description) 
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Test](#test)
    - [License](#license)
    - [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributions
    ${data.contribution}

    ## Test 
    ${data.test}

    ## Licenses 
    ![badge](https://img.shields.io/badge/license-${data.license}-blue)</br>

    This project is covered by ${data.license}

    ## Questions
    Email me if you have any questions at: ${data.email}</br>
    Look for me on GitHub at: https://github.com/${data.github}

   `
   , (err) =>
  err ? console.error(err) : console.log('Commit logged!'))});


  // <!DOCTYPE html>
  // <html lang="en">

  // <head>
  //   <meta charset="UTF-8">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //   <title>Portfolio Demo</title>
  //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  //   <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  //   <link rel="stylesheet" href="style.css">
  // </head>

  // <body>
  //   <header>
  //     <div class="container flex-row justify-space-between align-center py-3">
  //       <h1 class="page-title text-secondary bg-dark py-2 px-3">${data.name}</h1>
  //       <nav class="flex-row">
  //         <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
  //           data.github
  //         }">GitHub</a>
  //       </nav>
  //     </div>
  //   </header>
  //   <main class="container my-5">
  //         ${data.bio}
  //   </main>
  //   <footer class="container text-center py-3">
  //     <h3 class="text-dark">&copy; by ${data.name}</h3>
  //   </footer>
  // </body>
  // </html>