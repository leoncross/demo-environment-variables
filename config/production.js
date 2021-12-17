const {asyncConfig} = require('config/async');
const {getSSMParamStoreSecret} = require('./async')

const configs = {
  "test1": asyncConfig(getSSMParamStoreSecret('super-secret-api-key')),
  "test2": "not aws"
}

module.exports = configs

