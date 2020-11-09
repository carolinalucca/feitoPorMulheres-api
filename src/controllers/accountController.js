const accountsCollection = require('../models/accountSchema');

module.exports = {
    
    add: (request, response) => {
        const body = request.body;
        const account = new accountsCollection(body);

        account.save((error) => {
            if(error) {
                return response.status(400).send(error);
            }
            return response.status(201).send(account);
        });
    },

    get: (request, response) => {
        console.log(request.url);
        accountsCollection.find((error, accounts) => {
            if(error) {
                return response.status(500).send(error);
            } 
            return response.status(200).send(accounts);
        });
    },

    edit: (request, response) => {

    },

    remove: (request, response) => {

    }
};