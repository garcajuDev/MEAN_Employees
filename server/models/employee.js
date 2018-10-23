const mongoose = require('mongoose');
const { Schema } = mongoose; //Crear un esquema de modelo 

/**
 * Se crea un esquema dentro de MongoDB con los daots requeridos
 */
const EmployeeSchema = new Schema ({
    name: {type: String , required: true},
    position: {type: String , required: true},
    office: {type: String , required: true},
    salary: {type: Number , required: true}
});

module.exports = mongoose.model('Employee',EmployeeSchema);