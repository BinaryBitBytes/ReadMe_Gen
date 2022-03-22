// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const paddington = require('paddington')
function renderLicenseBadge(projLisence) {
    
    switch (projLisence) {
      case "MIT":
        return `https://img.shields.io/badge/license-MIT-green`;
        break;
      case "GPL-3.0":
        return `https://img.shields.io/badge/license-GPL--3.0-green`;
        break;
      case "Apache-2.0":
        return `https://img.shields.io/badge/license-Apache--2.0-green`;
        break;
      default:
        return "";
        break;
    }
  }
  
  // If there is no license, return an empty string
  function renderLicenseLink(projLisence) {
    switch (projLisence) {
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
  function renderLicenseSection(projLisence) {
    return `![${projLisence}](${renderLicenseBadge(projLisence)})
    ### [${renderLicenseLink(projLisence)}](${renderLicenseLink(projLisence)})
    `;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const ask =  (`## Description\n
    ${data.projDescription}\n
    Table of Contents:
    ------------------ \n
    * [![Installation]](#projInstallation)\n
    * [![Usage]](#projUsage)\n
    * [![Contributions]](#projContributions)\n
    * [![Testing]](#projTesting)\n
    * [![License]](#projLisence))\n
    * [![Questions]](#gHubUser)\n
    ### Installation
    -----------------\n
    ${data.projInstallation}\n
    ### Usage
    ----------\n
    ${data.projUsage}\n
    ### Contributions
    ------------------\n
    ${data.projContributions}\n
    ### Testing
    ------------\n
    ${data.projTesting}\n
    ### License
    ------------\n
    ### ${renderLicenseSection(data.projLisence)}\n
    ### Questions
    -------------\n
    [![Github Profile](https://github.com/${data.gHubUser})] | To reach me via Email ${data.projEmail}
  `);
  return(ask);
  }
  
  module.exports = generateMarkdown;