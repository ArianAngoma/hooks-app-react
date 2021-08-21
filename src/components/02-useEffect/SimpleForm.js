import './effects.css';
import {useEffect, useState} from "react";

const SimpleForm = () => {
    // useEffect se utiliza para escuchar cambios específicos del state o de alguna parte de la aplicación

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    // console.log('Hola') se ejecutará cada vez que hay cambios en el estado del componente
    /*
    useEffect(() => {
        console.log('Hola');
    });
    */

    // Se ejecutará solo una vez cuando se cargue el formulario
    useEffect(() => {
        console.log('Hola');
    }, []);

    // Se ejecutará cuando solo el formState cambia
    useEffect(() => {
        console.log('formState cambió');
    }, [formState]);

    // Se ejecutará cuando solo el email del formState cambia
    useEffect(() => {
        console.log('email cambió');
    }, [email]);


    const handleInputChange = ({target}) => {
        // console.log(target.name);
        // console.log(target.value);

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}

export default SimpleForm;