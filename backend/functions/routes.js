const dataBase = require('./database.js');

module.exports = app =>{
    const db = new dataBase();
    app.get('/', (req,res)=>{
        db.connection.query('SELECT * FROM appointments', (err, result, fields)=>{
            res.send(result);
        });
    });
}