const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, (email, senha, done) => {
        done(null, {id: '123'});
    })
);

passport.use(
    new BearerStrategy(
        async (token, done) => {
            try {
                jwt.verify(token, 'senha-secreta');
                done(null, {id: '123'}, { token: token });
            } catch (error) {
                done(error);
            }
        }
    )
);