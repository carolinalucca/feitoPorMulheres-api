var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (erro, db) => {
    if(erro) {
        throw erro;
    }
    var dbo = db.db('mydb');
    var myobj = { name: 'Carolina Lucca', address: 'Rua 1, 45' };
    dbo.collection('customers').insertOne(myobj, (erro, res) => {
        if(erro) {
            throw erro;
        }
        console.log('1 document inserted');
        db.close();
    });
});