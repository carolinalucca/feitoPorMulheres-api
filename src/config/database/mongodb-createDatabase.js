var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (erro, db) => {
    if(erro) {
        throw erro;
    }
    console.log('Database created!');
    db.close();
});