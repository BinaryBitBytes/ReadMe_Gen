console.log(process.argv);
console.log(typeof process.argv);
//!added node modules: Inquirer and FS
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");


inquirer
  .prompt([
    (Questions = {
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
    }),
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
      message: ["What Lisences would you like to use?"],//, <a src=`script.js.${projLisence}`>],
      name: "projLisence",
      choices: ['MIT', 'GPL-3.0', 'Apache-2.0','NONE'],
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
    {
      type: "input",
      message:
        "If someone needs to reach you please provide your email for contact?",
      name: "projEmail",
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
      fs.writeFile(filename, JSON.stringify(`The Official Readme for ${data.nameProject}`, null), (err) =>
        err ? console.log(err) : console.log(`logged file`)
      );
      //! Reading Filename for writing data
      fs.readFile(filename, "utf8", (error, data) =>
        error ? console.error(error) : console.log(data)
      );
      fs.appendFile(filename, `\n ${generateMarkdown(data)}`, (err) =>
        err
          ? console.log(err)
          : console.log(
              `#Name of the Project \n
              ------------------ \n
              ${data.nameProjectName}\n
              ${console.log(typeof data.nameProjectName )}
              \n
              ##User Name\n
              -----------------\n
              ${data.userName}\n
              ${console.log(typeof data.userName )}
              \n
              ##Description of the project\n
              -----------------\n
              ${data.projDescription}\n
              \n
              ##Project Installation\n
              -----------------\n
              ${data.projInstallation}\n
              \n
              ##How to use this Project?\n
              -----------------\n
              ${data.projUsage}\n
              \n
              ##Project Contributors\n
              -----------------\n
              ${data.projContributions}\n
              \n
              ##Testing for this Project\n
              -----------------\n
              ${data.projTesting}\n
              \n
              ##Lisence\n
              -----------------\n
              ${data.projLisence}\n
              \n
              ##If you have any questions you can reach me at my GitHub.\n
              -----------------\n
              ${data.gHubUser}\n
              `
            )
      );
    });
    //const enteredProject = `${data.nameProjectName}`;
    //const enteredUsername = `${data.userName}`;
    //const enteredDescription = `${data.projDescription}`;
    //const enteredInstallation = `${data.projInstallation}`;
    //const enteredUsage = `${data.projUsage}`;
    //const enteredContributions = `${data.projContributions}`;
    //const enteredTesting = `${data.projTesting}`;
    //const enteredLisence = `${data.projLisence}`;
    //const enteredGitHub = `${data.gHubUser}`;
    //!TEMPLATE VARIABLES
    //! Writing Filename
    ////const filename = `${data.nameProject}.md`;
    ////fs.writeFile(filename, JSON.stringify(`\n ${__TEMPLATE__}`, null), (err) =>
    ////  err ? console.log(err) : console.log(`logged file`)
    ////);
    ///////! Reading Filename for writing data
    /////fs.readFile(filename, "utf8", (error, data) =>
    ////  error ? console.error(error) : console.log(data)
    /////);
    //! TEMPLATE
    /*
    const __TEMPLATE__ = `\n
  ##Name of the Project\n
  ============\n
  ${data.nameProject}\n
  \n
  ##User Name\n
  ============\n
  ${data.nameUser}\n
  \n
  ##Description of the project\n
  ============\n
  ${data.projDescription}\n
  \n
  ##Project Installation\n
  ============\n
  ${data.projInstallation}\n
  \n
  ##How to use this Project?\n
  ============\n
  ${data.projUsage}\n
  \n
  ##Project Contributors\n
  ============\n
  ${data.projContributions}\n
  \n
  ##Testing for this Project\n
  ============\n
  ${data.projTesting}\n
  \n
  ##Lisence\n
  ============\n
  ${data.projLisence}\n
  \n
  ##If you have any questions you can reach me at my GitHub.\n
  ============\n
  ${data.gHubUser}\n
  `;
  */
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
