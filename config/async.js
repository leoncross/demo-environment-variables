const AWS = require('aws-sdk');

const getSSMParamStoreSecret = async (secret) => {
  AWS.config.update({region: 'us-east-1'});
  AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });

  const ssm = new AWS.SSM();
  return ssm.getParameter({ Name: secret, WithDecryption: true })
    .promise()
    .then((params) => params.Value)
    .catch((err) => { throw err });
}

const getDatabaseSecret = async (secret) => {
  const db = null // would be a db instance; just an example
  return db.query(`select protected_value from db_secrets where secret = ?`, secret)
}


module.exports = {
  getSSMParamStoreSecret,
  getDatabaseSecret
}
