// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  #Description

  ${data.description}

  ##Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Test](#test)
  *[Questions](#questions)

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  ${data.license}

  ##Contributing
  ${data.contributing}

  ##Test
  ${data.test}

  ##Questions
  ${data.name}${data.email}

`;
}

module.exports = generateMarkdown;
