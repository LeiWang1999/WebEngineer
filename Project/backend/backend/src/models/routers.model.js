const Sequelize = require('sequelize')
const sequelize = require('../db')
const { INTEGER, STRING } = Sequelize

const Routers = sequelize.define(
  'routers',
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: STRING
    },
    username: {
      type: STRING
    },
    password: {
      type: STRING
    },
    shellPromt: {
      type: STRING
    },
    host: {
      type: STRING
    },
    port: {
      type: INTEGER
    },
    shutdownbatch: {
      type: STRING
    },
    noshutdownbatch: {
      type: STRING
    }
  },
  {
    freezeTableName: true
  }
)

module.exports = {
    Routers,
    getRouters : async ()=>{
      return Routers.findAndCountAll()
    }
}

