# Example of Async Environment Specific Configurations

The included code is an example of how one can handle asynchronous environment specific variables 

Better documentation explaining the node-config async handling: [Asynchronous-Configurations](https://github.com/lorenwest/node-config/wiki/Asynchronous-Configurations)

## Run in different environments
```
// Development:
npm run start:dev

// Production:
npm run start:prod
```

## Adding new environments
To add new environments: i.e., `test`, just create a new file in config named `test.js` and export this variable.

Add a new script in package.json that sets the node_env to be test, and runs node index.js
```
// package.json
    "scripts": {
        "start:test": "NODE_ENV=test node index.js"
    }
```

## Adding new asynchronous functions
Simply just add a new function to async, replicating the implementation as show in `config/async.js`


