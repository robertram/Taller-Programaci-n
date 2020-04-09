const {
    Schema,
    model
} = require('mongoose');


const SalidaSchema = new Schema({
    fecha: Number,
    hora: String, //Date
    destino: String
})

const PatronSchema = new Schema({
    dnipatron: Number
})

const BarcoSchema = new Schema({
    matricula: Number,
    nombreBarco: String,
    amarre: String,
    cuota: String
})

const SocioSchema = new Schema({
    dnisocio: Number
})
//const socioModel = mongoose.model('socio', SocioSchema)

const PersonaSchema = new Schema({
    dni: Number,
    nombre: String,
    direccion: String,
    Socio: [{type: Schema.Types.ObjectId, ref:'socio'}],
    /*Patron: [PatronSchema],
    Barco: [BarcoSchema],
    Salida: [SalidaSchema]*/
})

/*const PersonaModel= mongoose.model('persona', PersonaSchema)

const aPersona= new PersonaModel({dni: 1234, nombre:'Juana', direccion:'Puntarenas'});

aPersona.save();*/

module.exports = model('Persona', PersonaSchema)