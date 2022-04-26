# <center>*READMEmeGen*</center>




##### <center>*Description*</center>


The README.md Generator is a command-line-input application run in Node that requests information for the user about a project and generates an HTML file displaying that information.  Before running the application the user must perform an npm install to install all required dependencies.

### <center>*Getting Started*</center>

User launchs the application they are asked to answer questions for the project README.md. The user then enters info to the generator.  




### <center>*Approach Tech*</center>


This app was created using OOP(Object-Oriented Programming). Using constructors and classes to create team member profile objects based on information entered by the User.  The application is run off nodeJs and uses the Inquirer and Filing System nodeJs modules. Objects of files should also be stored in separate JS files and passed among one another using module.exports and require.

### *Dependencies*


 - [GitHub](https://github.com/)

 - [Google](https://google.com/)  [/ Fonts](https://fonts.google.com/)

 - [Read the Docs](https://readthedocs.org/)

 - [MkDocs](https://www.mkdocs.org/)

 - [Jest.io](https://jestjs.io/docs/getting-started)

 - [Node Package Manager](https://www.npmjs.com/)

 - [Stack Overflow](https://stackoverflow.com)


 ## *Installing*


 Jest is used to perform tests on all the class constructors. The FS node module is used to generate an HTML file from strings written in JavaScript.  Since the app will work no matter how many team members the user adds to the system. The HTML is built in a piece by piece mode. It all starts with the head and part of the body.  For each team member the object is created. A new column with a card inside containing the team member information is added.  Then when the last member has been added the last piece of the HTML is added to the file.







## *Authors*

- [abairdster](https://github.com/abairdster)






![GitHub](https://img.shields.io/github/license/abairdster/Team-Profile-Generator?color=%2339FF14)