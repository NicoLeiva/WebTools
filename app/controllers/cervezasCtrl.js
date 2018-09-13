var Cerveza = require('../models/cerveza');

//GET - Return all Cervezas.
exports.findAllCervezas = function(req, res){
    console.log('cervezaCtrl.findAllCervezas');

    Cerveza.find(function(err, cervezas){
      if (err) return res.status(500).send(err.message);

      console.log('GET/cervezas');
      res.status(200).jsonp(cervezas);
    });
};

//GET - Return a Cervezas with specified id.
exports.findById = function(req, res){
    console.log('cervezaCtrl.findById');

    Cerveza.findById(req.params.id, function(err, cerveza){
      if(err) return res.status(500).send(err.message);

      console.log('GET/cerveza/' + req.params.id);
      res.status(200).jsonp(cerveza);
    });
};

//POST - Insert a new Cervezas in the DB.
exports.addCerveza = function(req, res){
    console.log('cervezaCtrl.addCerveza');
    console.log(req.body);

    var c = new Cerveza({
      nombre:   req.body.nombre,
      precio: req.body.precio,
      grad: req.body.grad,
      tipo:   req.body.tipo
    });

    c.save(function(err, cerveza){
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(cerveza);
    });

};

//DELETE - Delete a cerveza with specified id.
exports.deleteCerveza = function(req, res){
    console.log('cervezaCtrl.deleteCerveza');

    Cerveza.findById(req.params.id, function(err, cerveza){
      if(err) return res.status(500).send(err.message);
      cerveza.remove(function(err){
        if (err) return res.status(500).send(err.message);

        res.status(200).send();
      });
    });
};

//PUT - Update a register already exists.
exports.updateCerveza = function(req, res){
    console.log('cervezaCtrl.updateCerveza');

    Cerveza.findById(req.params.id, function(err, cerveza){
      if(err) return res.status(500).send(err.message);

      cerveza.nombre    = req.body.nombre;
      cerveza.precio  = req.body.precio;
      cerveza.grad  = req.body.grad;
      cerveza.tipo    = req.body.tipo;


      cerveza.save(function(err){
        if(err) return res.status(500).send(err.message);

        res.status(200).jsonp(cerveza);
      });
    });
};
