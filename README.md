# Example of Environment Specific Configurations

The included code is an example of how one can handle environment specific variables using just two packages:

1. [node-config](https://www.npmjs.com/package/config)
2. [aws-env-variables](https://www.npmjs.com/package/aws-env-variables) 

## Run in different environments
```
// Development:
npm run start:dev

// Production:

npm run env:prod
npm run start:prod
```
