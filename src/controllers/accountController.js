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

    remove: (request, response) => {
        const idParam = request.params.id;
        accountsCollection.findByIdAndDelete(idParam, (error, account) => {
            if(error) {
                return response.status(500).send(error);
            } else if(account) {
                return response.status(200).send('Conta apagada!');
            }
            return response.sendStatus(404);
        });
    },

    edit: (request, response) => {
        const idParam = request.params.id;
        const body = request.body;
        const options = { new: true };

        accountsCollection.findByIdAndUpdate(
            idParam, body, options, (error, account) => {
                if(error) {
                    return response.status(500).send(error);
                } else if(account) {
                    return response.status(200).send(account);
                }
                return response.sendStatus(404);
            }
        );
    }
};