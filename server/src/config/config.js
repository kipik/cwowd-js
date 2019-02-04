const path = require('path')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'cwowd',
    user: process.env.DB_USER || 'cwowd',
    password: process.env.DB_PASS || 'cwowd',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      // storage: './cwowd.sqlite'
      storage: path.resolve(__dirname, '../../cwowd.sqlite'),
      operatorsAliases: Op
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
