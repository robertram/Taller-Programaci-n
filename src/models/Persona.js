const {Schema, model} = require('mongoose');

const SalidaSchema = new Schema({
    fecha:Number, 
    hora:String, //Date
    destino:String
})

const PatrónSchema = new Schema({
    dnipatron:Number, 
    Salida:[SalidaSchema]
})

const BarcoSchema = new Schema({
    matricula:Number, 
    nombre:String, 
    amarre:String, 
    cuota:String, 
    Patrón: [PatrónSchema]
})

const SocioSchema = new Schema({
    dnisocio:Number, 
    Barco:[BarcoSchema]
})

const PersonaSchema = new Schema({
    dni:Number, 
    nombre:String, 
    direccion:String, 
    Socio:[SocioSchema]
})

module.exports = model('Persona',PersonaSchema)