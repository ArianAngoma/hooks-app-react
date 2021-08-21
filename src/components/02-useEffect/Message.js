import {useEffect, useState} from "react";

const Message = () => {
    const [{x, y}, setCoords] = useState({x: 0, y: 0});

    useEffect(() => {
        // console.log('Componente montado');

        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            //console.log(coords);
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove)

        // Fase de limpieza
        return () => {
            // console.log('Componente desmontado');

            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div>
            <h3>Hola Mundo</h3>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}

export default Message;