require('dotenv').config()
const config = require('config')

console.log(process.env.NODE_ENV)

console.log(config.get('db.name'));
console.log(config.get('another-secret'))
