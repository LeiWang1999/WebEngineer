const Sequelize = require('sequelize')
const sequelize = require('../db')

const Url = sequelize.define(
  'url',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    videoId: {
      type: Sequelize.INTEGER
    },
    index: {
      // 需要 排序用的
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING(20)
    },
    path: {
      type: Sequelize.TEXT
    }
  },
  {
    freezeTableName: true,
    indexes: [
      {
        name: 'partner_unique_index_id',
        unique: true,
        method: 'BTREE',
        fields: ['id']
      }
    ]
  }
)

module.exports = {
  Url,
  findUrlByVideoId(videoId, urlPage, urlLimit, order) {
    let orderOption = []
    if (order) {
      orderOption = [['index', order]]
    } else {
      orderOption = [['index', 'ASC']]
    }

    return Url.findAndCountAll({
      limit: urlLimit,
      offset: (urlPage - 1) * urlLimit,
      order: orderOption,
      where: {
        videoId
      }
    })
  }
}
