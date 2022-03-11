//installed inquirer using terminal npm i inquirer
/*
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the:
- title of my project 
- and sections entitled Description,
- Table of Contents,
- Installation,
- Usage,
- License,
- Contributing,
- Tests,
- and Questions
WHEN I enter my:
- project title
THEN this is displayed as the title of the README
WHEN I enter a"
- description, 
- installation instructions,
- usage information,
- contribution guidelines,
- and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
*/
console.log(process.argv);
console.log(typeof process.argv);
//!added node modules: Inquirer and FS
const inquirer = require("inquirer");
const fs = require("fs");
/*fs.readFile('data.csv', 'utf8', (error, data) =>
    error ? console.error(error) : console.log(data)
    );

fs.writeFile('log.txt', process.argv[2], (err) =>
err ? console.error(err) : console.log ('File log complete!')
);*/

inquirer
  .prompt([
    Questions={
      type: "input",
      message: "What is your projects name for the readme?",
      name: "nameProject",
      validate: (blankInput) => {
        if (blankInput) {
          return true;
        } else {
          return `An input is needed to continue`;
        }
      },
    },
    {
      type: "input",
      message: "What is your name?",
      name: "nameUser",
      validate: (blankInput) => {
        if (blankInput) {
          return true;
        } else {
          return `An input is needed to continue`;
        }
      },
    },
    {
      type: "input",
      message: "Describe your project here.",
      name: "projDescription",
      validate: (blankInput) => {
        if (blankInput) {
          return true;
        } else {
          return `An input is needed to continue`;
        }
      },
    },
    {
      type: "input",
      message: "Enter Intsturctions on how to install your project",
      name: "projInstallation",
      validate: (blankInput) => {
        if (blankInput) {
          return true;
        } else {
          return `An input is needed to continue`;
        }
      },
    },
    {
      type: "input",
      message: "How to use this project?",
      name: "projUsage",
      validate: (blankInput) => {
        if (blankInput) {
          return true;
        } else {
          return `An input is needed to continue`;
        }
      },
    },
    {
      type: "input",
      message:
        "Acknowledgements to the contributing team members of this project.",
      name: "projContributions",
      validate: (blankInput) => {
        if (blankInput) {
          return true;
        } else {
          return `An input is needed to continue`;
        }
      },
    },
    {
      type: "input",
      message:
        "Decribe the passing tests involved. Are there any outstanding troubles that need a resolution?",
      name: "projTesting",
      validate: (blankInput) => {
        if (blankInput) {
          return true;
        } else {
          return `An input is needed to continue`;
        }
      },
    },
    {
      type: "list",
      message: "What Lisences would you like to use?",
      name: "projLisence",
      choices: ["none", "MIT"],
      validate: (blankInput) => {
        if (blankInput) {
          return true;
        } else {
          return `An input is needed to continue`;
        }
      },
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "gHubUser",
      validate: (blankInput) => {
        if (blankInput) {
          return true;
        } else {
          return `An input is needed to continue`;
        }
      },
    },
  ])

  .then((data) => {
    const filename = `${data.nameProject}.md`;
    //const enteredProject = `${data.nameProjectName}`;
    //const enteredUsername = `${data.userName}`;
    //const enteredDescription = `${data.projDescription}`;
    //const enteredInstallation = `${data.projInstallation}`;
    //const enteredUsage = `${data.projUsage}`;
    //const enteredContributions = `${data.projContributions}`;
    //const enteredTesting = `${data.projTesting}`;
    //const enteredLisence = `${data.projLisence}`;
    //const enteredGitHub = `${data.gHubUser}`;
    let __TEMPLATE__ = (
    `#Name of the Project
    ------------------
    ${data.nameProjectName}

    ##User Name
    -----------------
    ${data.userName}

    ##Description of the project
    -----------------
    ${data.projDescription}

    ##Project Installation
    -----------------
    ${data.projInstallation}

    ##How to use this Project?
    -----------------
    ${data.projUsage}

    ##Project Contributors
    -----------------
    ${data.projContributions}

    ##Testing for this Project
    -----------------
    ${data.projTesting}

    ##Lisence
    -----------------
    ${data.projLisence}

    ##If you have any questions you can reach me at my GitHub.
    -----------------
    ${data.gHubUser}
    `)  
    fs.writeFile(filename, JSON.stringify(data, null, __TEMPLATE__.data), (err) =>
      err ? console.log(err) : console.log(
            `#Name of the Project
            ------------------
            ${data.nameProjectName}

            ##User Name
            -----------------
            ${data.userName}

            ##Description of the project
            -----------------
            ${data.projDescription}

            ##Project Installation
            -----------------
            ${data.projInstallation}

            ##How to use this Project?
            -----------------
            ${data.projUsage}

            ##Project Contributors
            -----------------
            ${data.projContributions}

            ##Testing for this Project
            -----------------
            ${data.projTesting}

            ##Lisence
            -----------------
            ${data.projLisence}

            ##If you have any questions you can reach me at my GitHub.
            -----------------
            ${data.gHubUser}
            `)
    );
  });

/*
        if ((data) => 
        data.nameUser === data.input
        ?console.log('Readme file created!')
        :console.log('You did not enter your name correctly!')
            const enteredProject = `${nameProjectName}`;
            const enteredUsername = `${userName}`;
            const enteredDescription = `${projDescription}`;
            const enteredInstallation =`${projInstallation}`;
            const enteredUsage = `${projUsage}`;
            const enteredContributions = `${projContributions}`;
            const enteredTesting = `${projTesting}`;
            const enteredLisence = `${projLisence}`;
            const enteredGitHub = `${gHubUser}`;
        */
