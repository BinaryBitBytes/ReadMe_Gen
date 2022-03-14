// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case "MIT":
        return `https://img.shields.io/badge/license-MIT-blue`;
        break;
      case "GPL-3.0":
        return `https://img.shields.io/badge/license-GPL--3.0-blue`;
        break;
      case "Apache-2.0":
        return `https://img.shields.io/badge/license-Apache--2.0-blue`;
        break;
      default:
        return "";
        break;
    }
  }
  
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case "MIT":
        return `https://choosealicense.com/licenses/mit/`;
        break;
      case "GPL-3.0":
        return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
        break;
      case "Apache-2.0":
        return `http://www.apache.org/licenses/LICENSE-2.0`;
        break;
      default:
        return "";
        break;
    }
  }
  
  //! Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    return `![${license}](${renderLicenseBadge(license)})
    ### [${renderLicenseLink(license)}](${renderLicenseLink(license)})
    `;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.nameProject}
    ## Description
    ${data.projDescription}
    ## Table of Contents:
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Testing](#tests)
    - [Questions](#questions)
    ## Installation
    ${data.projInstallation}
    ## Usage
    ${data.projUsage}
    ## License
    ### ${renderLicenseSection(data.projLisence)}
    ## Contributions
    ${data.projContributions}
    ## Testing
    ${data.projTesting}
    
    ## Questions
    [Github Profile](https://github.com/${data.gHubUser}) | To reach me via Email ${data.projEmail}
  `;
  }
  
  module.exports = generateMarkdown;