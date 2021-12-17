const {resolveAsyncConfigs} = require('config/async');
const config = require('config')

resolveAsyncConfigs(config)
  .then(() => {

    // Run typical entry stuff here

    console.log(config.get('test1'));
    console.log(config.get('test2'));
  });

