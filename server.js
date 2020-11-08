const app = require('./src/config/app');
const port = 3000;

const routes = require('./src/app/rotas');
routes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));