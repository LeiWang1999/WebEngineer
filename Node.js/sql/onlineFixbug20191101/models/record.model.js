const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')
const { BIGINT, INTEGER, STRING } = Sequelize

const Record = sequelize.define(
  'record',
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    videoId: {
      type: INTEGER
    },
    userId: {
      type: INTEGER
    },
    urlId: {
      type: INTEGER
    },
    time: {
      type: STRING
    },
    createdAt: {
      type: BIGINT, // 创建时间
      get() {
        return moment
          .unix(this.getDataValue('createdAt'))
          .format('YYYY-MM-DD HH:mm:ss')
      }
    },
    updatedAt: {
      type: BIGINT, // 更新时间,
      get() {
        return moment
          .unix(this.getDataValue('updatedAt'))
          .format('YYYY-MM-DD HH:mm:ss')
      }
    }
  },
  {
    freezeTableName: true
  }
)

module.exports = Record

