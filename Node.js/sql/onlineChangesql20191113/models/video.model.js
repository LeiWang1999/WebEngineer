const Sequelize = require('sequelize')
const sequelize = require('../db')
const moment = require('moment')

const { TEXT, INTEGER, BIGINT } = Sequelize

const Video = sequelize.define(
    'video',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      categoryId: INTEGER,
      languageId: INTEGER,
      regionId: INTEGER,
      doubanId: INTEGER,
      doubanLink: TEXT,
      name: TEXT,
      actors: TEXT,
      directors: TEXT,
      introduction: {
        type: TEXT,
        // get() {
        //   return removeHtml(this.getDataValue('introduction'))
        // }
      },
      imgPath: {
        type: TEXT,
        get() {
          return `http://202.119.245.18:8668/${this.getDataValue('imgPath')}`
        }
      },
      status: TEXT,
      playCount: INTEGER,
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
      timestamps: false,
      freezeTableName: true
    }
  )

module.exports = Video