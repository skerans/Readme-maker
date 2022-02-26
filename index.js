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

    fs.writeFile('README.md',
      `<h1 align="center"> ${data.projectTitle} <h1>

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

## Contributing
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
        err ? console.error(err) : console.log('Commit logged!'))
  });

