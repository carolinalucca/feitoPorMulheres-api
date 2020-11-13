const controller = require('../controllers/userController');
const passport = require('passport');

module.exports = app => {
    app.route('/login').post(
        passport.authenticate('local', { session: false }), 
        controller.login);
};