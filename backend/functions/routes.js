const dataBase = require('./database.js');

module.exports = app =>{
    app.get('/', (req,res)=>{
        const db = new dataBase();
        db.connection.query('SELECT * FROM appointments', (err, result, fields)=>{
            res.send(result);
        });
        db.endConnection();
    });
    app.post('/add-appointment', (req, res)=>{
        const db = new dataBase();
        let query = `INSERT INTO appointments(title, date, description) VALUES ('${req.body.title}', '${req.body.date}', '${req.body.description}')`;
        var results;
        db.connection.query('SELECT DATE_FORMAT(date, \'%Y-%m-%d\') AS date FROM appointments ', (err, results, fields)=>{
            console.log(results[1].date);
        });
        db.endConnection();
    });
    app.post('/add', (req, res)=>{
        const db = new dataBase();
        let query = `INSERT INTO appointments(title, date, description) VALUES ('${req.body.title}', '${req.body.date}', '${req.body.description}')`;
        db.connection.query(query, (err, results, fields)=>{
            console.log(results);
        });
        db.endConnection();
    });
}