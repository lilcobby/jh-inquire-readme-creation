// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title: ${data.title}




## Badge: 

![License: ${data.license}](https://img.shields.io/badge/${data.license}-yellow.svg)



## Heres the license link: (https://choosealicense.com/licenses/${data.license})

## Table of Contents:
- [Description](#Description:)
- [Installation](#Installation:)
- [Usage](#Usage:)
- [Test Instructions](#Test-Instructions:)


## Description: ${data.description}

## Installation: ${data.installation}

## Usage: ${data.usage}

## Contributions: ${data.contributions}

## Test-Instructions: ${data.testins}

## Licensing: ${data.license}

## Github: https://github.com/${data.username}

## Email: ${data.email}`;
}

module.exports = generateMarkdown;
