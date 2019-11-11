const sequelize = require('./db')
const Sequelize = require('sequelize')

// 会默认在表名后面加个s 要加上freezeTableName参数
const Pet = sequelize.define('pets', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
    timestamps: false,
    freezeTableName: true
});

var now = Date.now();

Pet.create({
    id: 'g-' + now,
    name: 'Gaffey',
    gender: false,
    birth: '2007-07-07',
    createdAt: now,
    updatedAt: now,
    version: 0
}).then(function (p) {
    console.log('created.' + JSON.stringify(p));
}).catch(function (err) {
    console.log('failed: ' + err);
})

;(async () => {
    var dog = await Pet.create({
        id: 'g' + now,
        name: 'Coffee',
        gender: true,
        birth: '2008-01-20',
        createdAt: now,
        updatedAt: now,
        version: 0
    })
    console.log('Created', JSON.stringify(dog))   
}
)()

;(async () =>{
    var pets = await Pet.findAll({
        where:{
            name: 'Coffee',
        }
    })
    console.log(pets);
})()