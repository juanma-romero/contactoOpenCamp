import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../my-app/src/models/contacto.class' 

//componente padre 
export const ComponenteA = () => {
//crea instancia de clase Contacto y con los datos para pasar como props
  const creaContacto = new Contacto('Juanma', 'Romero', 'xjuanmax@hotmail.com',false);

  return (
    <div>
      <h1>Contacto:</h1>
{/* renderiza ComponenteB y le pasa las props */}
      <ComponenteB contacto={creaContacto} />
      
    </div>
  )
}


export const ComponenteB = ({ contacto }) => {
  return (
    <div>
        <h2>Nombre: { contacto.nombre }</h2>
        <h3>Descripcion: { contacto.apellido }</h3>
        <h3>Nivel: { contacto.email }</h3>
        <h3>Estado: { contacto.conectado ? "Contacto En Línea": "Contacto No Disponible" }</h3>
        
        
    </div>
  )
}


ComponenteB.propTypes= {
  contacto: PropTypes.instanceOf(Contacto)
}


