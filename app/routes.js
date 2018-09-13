var cerveceriaCtrl = require('./controllers/cerveceriasCtrl');
var cervezaCtrl = require('./controllers/cervezasCtrl');

module.exports = function(app){

        //Cervecerias
        app.get('/api/cervecerias', cerveceriaCtrl.findAllCervecerias);
        app.post('/api/cervecerias', cerveceriaCtrl.addCerveceria);

        app.get('/api/cervecerias/:id', cerveceriaCtrl.findById);
        app.put('/api/cervecerias/:id', cerveceriaCtrl.updateCerveceria);
        app.delete('/api/cervecerias/:id', cerveceriaCtrl.deleteCerveceria);

        //Cervezas
        app.get('/api/cervezas', cervezaCtrl.findAllCervezas);
        app.post('/api/cervezas', cervezaCtrl.addCerveza);

        app.get('/api/cervezas/:id', cervezaCtrl.findById);
        app.put('/api/cervezas/:id', cervezaCtrl.updateCerveza);
        app.delete('/api/cervezas/:id', cervezaCtrl.deleteCerveza);


        app.get('*', function(req, res) {
            res.sendFile(__dirname + '/public/index.html');
        });


}
