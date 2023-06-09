const parseArgs = require('minimist')(process.argv.slice(2)) // ejemplo -> nodemon src/server.js -p 8080 -m FORK
const config = {
  port: parseArgs.p, // puerto escucha
  mode: parseArgs.m, // mode 'FORK' (defecto) o 'CLUSTER'
  same: parseArgs.a // para CLUSTER puerto unico (defecto) o '1' puertos correlativos
}

require('dotenv').config()
const staticFiles = process.env.STATICFILES

module.exports = { config, staticFiles }