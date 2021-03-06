function generateMarkdown(data) {
  return `
  
# ${data.title}

${data.license}

## Description
${data.description}

## Table Of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Test](#Test)
* [Questions](#Questions)
* [Author](#Author)


## Installation
${data.installation}

## Usage
${data.usage}

## Contribute
${data.contribute}

## Test
${data.test}

## Questions

If you have any questions don't hesitate to create an issue for this repository ${data.email}

## Author
${data.profilePicture}

`;
}

module.exports = generateMarkdown;
