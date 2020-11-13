const jwt = require('jsonwebtoken');

function criaTokenJWT(usuario) {
    const payload = {
        id: usuario.id
    };

    return jwt.sign(payload, 'senha-secreta');
}

module.exports = {
    login: (request, response) => {
        const token = criaTokenJWT(request.user);
        response.set('Authorization', token);
        response.status(204).send();
    }
};