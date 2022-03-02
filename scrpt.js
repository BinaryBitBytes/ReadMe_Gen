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
console.log(typeof process.argv[2])
//added node modules: Inquirer and FS
const inquirer = require('inquirer');;
const fs = require('fs');
fs.readFile('data.csv', 'utf8', (error, data) =>
    error ? console.error(error) : console.log(data)
    );

fs.writeFile('log.txt', process.argv[2], (err) =>
err ? console.error(err) : console.log ('File log complete!')
);

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your projects name for the readme?',
            name: 'nameProject',
            validate: (blankInput)=>{ if (blankInput){return true} else{return `An input is needed to continue`}}
        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'nameUser',
            validate: (blankInput)=>{ if (blankInput){return true} else{return `An input is needed to continue`}}
        },
        {
            type: 'input',
            message: 'Describe your project here.',
            name: 'projDescription',
            validate: (blankInput)=>{ if (blankInput){return true} else{return `An input is needed to continue`}}
        },
        {
            type : 'input',
            message:'Enter Intsturctions on how to install your project',
            name: 'projInstallation',
            validate: (blankInput)=>{ if (blankInput){return true} else{return `An input is needed to continue`}}
        },
        {
            type:'input' ,
            message: 'How to use this project?',
            name: 'projUsage',
            validate: (blankInput)=>{ if (blankInput){return true} else{return `An input is needed to continue`}}
        },
        {
            type: 'input',
            message: 'Acknowledgements to the contributing team members of this project.',
            name: 'projContributions',
            validate: (blankInput)=>{ if (blankInput){return true} else{return `An input is needed to continue`}}
        },
        {
            type: 'input' ,
            message: 'Decribe the passing tests involved. Are there any outstanding troubles that need a resolution?',
            name: 'projTesting',
            validate: (blankInput)=>{ if (blankInput){return true} else{return `An input is needed to continue`}}
        },
        {
            type: 'list',
            message:'What Lisences would you like to use?',
            name: 'projLisence',
            choices: ['none', 'MIT'],
            validate: (blankInput)=>{ if (blankInput){return true} else{return `An input is needed to continue`}}
        },
        {
            type:'input',
            message:'What is your github username?',
            name: 'gHubUser',
            validate: (blankInput)=>{ if (blankInput){return true} else{return `An input is needed to continue`}}
        },
        //questions = `${gitHubUserURL}`,
        //email = `${email}`,
    ]
    ).then(({
        title,
        youName,
        description,
        instrictions,
        howToUse,
        contributions,
        testing,
        lisence,
        git,
        questions
    }
    )
    )

    .then((data) => {
        const filename = `${data.nameProject}.json`;

        fs.writeFile(filename , JSON.stringify(data, null , '\t'),(err) =>
            err ? console.log(err) : console.log ('You made a readme.')
        );
        data.nameUser === data.input
            ?console.log('Readme file created!')
            :console.log('You did not enter your name correctly!')
    });
    /*
    .catch((error) => {
        if (error) {

        } else {

        }
    })*/

