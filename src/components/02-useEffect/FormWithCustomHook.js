import './effects.css';
import useForm from "../../hooks/useForm";
import {useEffect} from "react";

const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    // useEffect se ejecuta cuanto email cambia de valor
    useEffect(() => {
        console.log('Email cambió');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
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

            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type='submit' className='btn btn-primary'>
                Guardar
            </button>

        </form>
    )
}

export default FormWithCustomHook;