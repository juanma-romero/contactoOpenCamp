import PropTypes from 'prop-types'

// clase Contacto con el constructor de instacia
export class Contacto {
    nombre='';
    apellido='';
    email= '';
    conectado= false;

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }

}

// tipos de datos
Contacto.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool     
  }
