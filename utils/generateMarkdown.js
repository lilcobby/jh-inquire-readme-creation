// TODO: Create a function to generate markdown for README
// future work, add checks if input !=  " ", append section. else don't

// replace method used to convert -- to -. useful for making the badge link and documentation link function properly.
function none(data) {
  if (data.license === "NONE") {
    console.log("You have selected no license, but...");
    return "";
  } else {
    return `## Badge: 

  ![License: ${data.license}](https://img.shields.io/badge/${
      data.license
    }-red.svg) 

  ## And here is the license link: (https://choosealicense.com/licenses/${data.license.replace(
    "--",
    "-"
  )})`;
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
