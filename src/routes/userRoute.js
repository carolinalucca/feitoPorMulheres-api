module.exports = app => {
    app.route('/login').get((request, response) => {return response.send('Teste')});
};