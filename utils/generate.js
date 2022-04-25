// open generateMarkdown for writing file
function licenseBadge(data) {
        const licenseType = data.license[0];
        let licenseString = " "
        if (licenseType === "MIT") {
                licenseString = `![License: MIT](https://img.shields.io/github/license/abairdster/READmeGen?color=blue)`
        };
        if (licenseType === "Apache License 2.0") {
                licenseString = `![License](https://img.shields.io/aur/license/READmeGen?color=blue)`
        };
      
        return licenseString
};

// open generateMarkdown for writing file
function generateMarkdown(data) {
        return `# ${data.title}
## Table of Contents:
1. [Description](#description) 
2. [Installation](#installation)
3. [Usage](#usage)  
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [GitHub](#gitHub)
8. [E-mail](#e-mail)
## Description
        ${data.description} 
## Installation
        ${data.installation}
## Usage
        ${data.usage}
## Contributing
        ${data.contributing}
## Tests
        ${data.tests}
## License
        ${licenseBadge(data)}
## GitHub
        ${data.github}
## E-mail
        ${data.email}`
}
module.exports = generateMarkdown;