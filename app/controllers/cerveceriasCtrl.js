var Cerveceria = require('../models/cerveceria');

//GET - Return all cervecerias
exports.findAllCervecerias = function(req, res){
    console.log('CerveceriaContrl.FindAllCervecerias');

    Cerveceria.find(function(err, cervecerias) {
      if (err) return res.status(500).send(err.message);

      console.log('GET/cervecerias')
      res.status(200).jsonp(cervecerias);
    });
};

// GET - Return a cerveceria with specified ID.
exports.findById = function(req, res){
    console.log('CerveceriaContrl.FindById');

    Cerveceria.findById(req.params.id, function(err, cerveceria){
      if (err) return res.status(500).send(err.message);

      console.log('GET/cerveceria/'+ req.params.id);
      res.status(200).jsonp(cerveceria);
    });
};

// POST - Insert  a new cerveceria in the DB.
exports.addCerveceria = function(req, res){
    console.log('CerveceriaContrl.addCerveceria');
    console.log(req.body);

    var c = new Cerveceria({
      nombre:     req.body.nombre,
      direccion:  req.body.direccion
    });

    c.save(function(err, cerveceria){
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(cerveceria);
    });
};

//DELETE - Delete a Cerveceria with specified ID.
exports.deleteCerveceria = function(req, res){
    console.log('CerveceriaContrl.deleteCerveceria');

    Cerveceria.findById(req.params.id, function(err, cerveceria){
      if(err) return res.status(500).send(err.message);
      cerveceria.remove(function(err){
        if(err) return res.status(500).send(err.message);

        res.status(200).send();
      });
    });
};

//PUT - Update a register already exists.
exports.updateCerveceria = function(req, res){
    console.log('CerveceriaContrl.updateCerveceria');

    Cerveceria.findById(req.params.id, function(err, cerveceria){
      cerveceria.nombre     = req.body.nombre;
      cerveceria.direccion  = req.body.direccion;

      cerveceria.save(function(err){
        if(err) return res.status(500).send(err.message);

        res.status(200).jsonp(cerveceria);
      })

    });
}
