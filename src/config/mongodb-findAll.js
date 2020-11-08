var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (erro, db) => {
    if(erro) {
        throw erro;
    }
    var dbo = db.db('mydb');
    dbo.collection('customers').find({}).toArray((erro, res) => {
        if(erro) {
            throw erro;
        }
        console.log(res);
        db.close();
    });
});