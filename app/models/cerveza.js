var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var cerveza_schema = new Schema({
	nombre : String,
	precio : String,
	grad : String,
	tipo : String
});

cerveza_schema.methods.getNombre = function(){
		return this.nombre;
}

cerveza_schema.methods.getPrecio = function(){
		return this.precio;
}

cerveza_schema.methods.getGrad = function(){
		return this.grad;
}
cerveza_schema.methods.getTipo = function(){
		return this.tipo;
}

var Cerveza = mongoose.model('Cerveza', cerveza_schema);

module.exports = Cerveza;
