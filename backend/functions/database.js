const mysql = require('mysql')

class dataBase{
    constructor(){
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'test',
            password: 'testtest',
            database: 'projects'
        });
    }
}

module.exports = dataBase;