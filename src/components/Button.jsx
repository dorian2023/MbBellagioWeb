// import PropTypes from 'prop-types';: Aquí se está importando la biblioteca PropTypes, que se utiliza para documentar los tipos de propiedades que un componente de React espera recibir.
import PropTypes from 'prop-types';

// const Button = (props) => {...}: Aquí se está definiendo un componente funcional de React llamado Button. Este componente recibe un objeto props.
const Button = (props) => {
    const { name1 } = props // const { name1 } = props: Aquí se está utilizando la desestructuración para extraer la propiedad name1 del objeto props.

    // return (...): Esta es la función de renderizado del componente. Está devolviendo un botón con la clase “button m-2” y el texto del botón es el valor de la prop name1.
    return (
        <>
        
         <button className="button m-2">{name1}</button> 
        </>
    )
}

// Button.propTypes = {...}: Aquí se está definiendo las PropTypes para el componente Button. Se está especificando que la prop name1 debe ser una cadena de texto (string) y que es requerida (isRequired).
Button.propTypes = {
  name1: PropTypes.string.isRequired,
};

// export default Button;: Por último, se está exportando el componente Button para que pueda ser utilizado en otros archivos.
export default Button;

