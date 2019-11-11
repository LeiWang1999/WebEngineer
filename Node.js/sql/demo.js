const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wanglei@666',
    database: 'nodeStudy'
})

connection.connect()
connection.query('SELECT * FROM NewUser LIMIT 1000', (err, results,fields)=>{
    if (err) throw err
    console.log('result is ', results[0])
    console.log('fields i ', fields);
})