const Sequelize = require('sequelize')
const sequelize = require('../db')

const Op = Sequelize.Op

const Software = sequelize.define(
  'software',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.TEXT
    },
    path: {
      type: Sequelize.TEXT
    },
    size: {
      type: Sequelize.TEXT
    },
    downloadCount: {
      type: Sequelize.INTEGER
    },
    platform: {
      type: Sequelize.TEXT
    },
    introduction: {
      type: Sequelize.TEXT
    },
    updateAt: {
      type: Sequelize.DATE
    },
    genre: {
      type: Sequelize.TEXT
    },
    language: {
      type: Sequelize.TEXT
    }
  },
  {
    freezeTableName: true
  }
)

module.exports = {
  Software ,
  addSoftware: software => {
    return Software.create(software)
  },

  getSoftware: options => {
    const { page, keywords, genre, pageSize } = options
    const condition = {
      order: [['id', 'DESC']],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      where: {
        name: { [Op.like]: `%${keywords}%` },
        genre: genre
      }
    }

    if (!keywords) {
      delete condition.where.keywords
    }

    if (genre === '全部类型') {
      delete condition.where.genre
    }

    return Software.findAndCountAll(condition)
  },

  /* 获取软件排行 */
  getRank: genre => {
    const condition = {
      order: [['downloadCount', 'DESC']],
      limit: 10,
      where: {
        genre: genre
      }
    }

    if (genre === '全部类型') {
      delete condition.where
    }

    return Software.findAndCountAll(condition)
  },

  deleteOneSoftware: id => {
    return Software.destroy({
      where: {
        id: id
      }
    })
  },

  getOneSoftware: id => {
    return Software.findOne({
      where: {
        id
      }
    })
  },

  updateSoftware: options => {
    const { software, softwareId } = options
    return Software.update(software, {
      where: {
        id: softwareId
      }
    })
  },

  updateDownloadCount: id => {
    return Software.update(
      { downloadCount: sequelize.literal('downloadCount + 1') },
      { where: { id: id } }
    )
  }
}
