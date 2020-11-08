var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (erro, db) => {
    if(erro) {
        throw erro;
    }
    var dbo = db.db("mydb");
    dbo.createCollection("customers", (erro, res) => {
        if(erro) {
            throw erro;
        }
        console.log('Collection created!');
        db.close();
    });
});