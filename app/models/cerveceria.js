var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cerveceria_schema = new Schema({
	nombre : String,
	direccion : String
});

cerveceria_schema.methods.getID =  function(){
		return this._id;
}

cerveceria_schema.methods.getDireccion = function(){
		return this.direccion;
}

cerveceria_schema.methods.getNombre = function(){
		return this.nombre;
}

var Cerveceria  = mongoose.model('Cerveceria', cerveceria_schema);

module.exports = Cerveceria;
