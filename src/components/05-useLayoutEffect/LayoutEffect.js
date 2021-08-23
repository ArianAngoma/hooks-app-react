import {useLayoutEffect, useRef, useState} from "react";
import useEnumerator from "../../hooks/useEnumerator";
import useFetch from "../../hooks/useFetch";
import './layout.css';

const LayoutEffect = () => {
    // useLayoutEffect es similar a useEffect solo que se ejecuta despues de que se renderizé su dependencias

    // Llamamos al custom hook useEnumerator para hacer un counter a las frases
    const {counter, increment} = useEnumerator(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // Si existe la data(true) extraer la posición 0 de data;
    const {quote} = !!data && data[0];

    // Referencia al párrafo
    const pTag = useRef()

    const [boxSize, setBoxSize] = useState({});

    // Sacamos la medición del pTag después que se renderizó
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote]);

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className='blockquote text-right'>
                <p
                    className='mb-0'
                    ref={pTag}>{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className='btn btn-primary'
                onClick={increment}>
                Siguiente frase
            </button>
        </div>
    )
}

export default LayoutEffect