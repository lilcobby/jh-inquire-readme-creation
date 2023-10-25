// TODO: Create a function to generate markdown for README

function none(data) {
  if (data.license === "NONE") {
    console.log("You have selected no license, but...");
    return "";
  } else {
    return `## Badge: 

    ![License: ${data.license}](https://img.shields.io/badge/${data.license}-yellow.svg) 

    ## Heres the license link: (https://choosealicense.com/licenses/${data.license})`;
  }
}

function generateMarkdown(data) {
  return `# Title: ${data.title}


${none(data)}


# Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Test Instructions](#test-instructions)
- [Github](#github)
- [Email](#email)


## Description 
${data.description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## Contributions 
${data.contributions}

## Test-Instructions 
${data.testins}

## Licensing 
${data.license}

## Github 
https://github.com/${data.username}

## Email 
${data.email}`;

  // this where an image goes
}

module.exports = generateMarkdown;
