# testStuff
testing JS things, e.g. ES.Next
Various things like

ES.Next

Module, Exports and Imports for node  

https://appdividend.com/2019/01/23/javascript-import-statement-tutorial-with-example/  
Create a wrapper start.js file   
npm install babel-register babel-preset-env --save-dev  
// start.js   
require('babel-register')({  
     presets: ['env']  
});    
module.exports = require('./index.js')    


Alternatively check: https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/

npm install --save npm-run-all  
npm install --save @babel/core @babel/cli @babel/preset-env nodemon rimraf

```
// package.json , "dev" - WINDOWS version -> otherwise remove SET and &
"scripts": {
    "start": "npm run prod",
    "start2": "node ./dist/index.js",
    "transpile": "babel . --out-dir ./dist --ignore node_modules/**/*.js",
    "clean": "rimraf dist",
    "build": "npm-run-all clean transpile",
    "dev": "SET NODE_ENV=development & npm-run-all build start",
    "prod": "SET NODE_ENV=production  & npm-run-all build start"
}
...

{  
  // .. contents above
  "babel": {
    "presets": ["@babel/preset-env"]
  },
}
```

npm run transpile
