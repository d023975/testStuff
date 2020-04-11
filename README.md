# testStuff
testing JS things, e.g. ES.Next
Various things like

ES.Next

Module, Exports and Imports for node < v 13

https://appdividend.com/2019/01/23/javascript-import-statement-tutorial-with-example/  
Create a wrapper start.js file   
npm install babel-register babel-preset-env --save-dev  
// start.js   
require('babel-register')({   
          presets: ['env']   
});    
module.exports = require('./app.js')    
