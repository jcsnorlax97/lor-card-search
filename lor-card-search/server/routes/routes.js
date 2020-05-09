const cardRoutes = require('./cards');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('Welcome to the development api-server');
    })

    // run the card route module to
    cardRoutes(app, fs);
};

module.exports = appRouter;