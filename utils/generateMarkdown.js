// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title: ${data.title}

## Table of Contents:
        [Description](#description)
        [Install](#install)
        [Usage](#usage)
        [Test Instructions](#test instructions)


## Description: ${data.description}

## Installation: ${data.installinst}

## How to use the App: ${data.usageinf}

## Contributions: ${data.contributions}

## Test Instructions: ${data.testins}

## Licensing: ${data.license}

## Github: https://github.com/${data.username}

## Email: ${data.email}`;
}

module.exports = generateMarkdown;
