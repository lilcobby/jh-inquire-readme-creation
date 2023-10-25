// future work, add checks if input !=  " ", append section. else don't
// TODO: Create a function to generate markdown for README

// function to create the license url and section...had to
function noneUrl(data) {
  if (data.license === "NONE") {
    return "No License Provided";
  } else {
    return `## License: 
   License link: (https://choosealicense.com/licenses/${data.license.replace(
     "--",
     "-"
   )})`;
  }
}


// replace method used to convert -- to -. useful for making the badge link and documentation link function properly.
function none(data) {
  if (data.license === "NONE") {
    console.log("You have selected no license, but...");
    return "";
  } else {
    return `## Badge: 

  ![License: ${data.license}](https://img.shields.io/badge/${data.license}-red.svg) `;
  }
}

function generateMarkdown(data) {
  return `# Title: ${data.title}


${none(data)}


# Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)



## Description 
${data.description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## Contributions 
${data.contributions}

## Tests
${data.testins}

## Licensing 
${noneUrl(data)}


## Questions

https://github.com/${data.username}


${data.email}`;

  // this where an image goes
}

module.exports = generateMarkdown;
