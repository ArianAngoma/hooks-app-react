import {useEffect, useRef, useState} from "react";

const useFetch = (url) => {
    const isMounted = useRef(true);

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    // Solo lo hará cuando el componente se carga por primera vez
    useEffect(() => {
        return () => {
            isMounted.current = false;
            // console.log(isMounted.current);
        }
    }, []);

    useEffect(() => {
        setState({data: null, loading: true, error: null});

        fetch(url).then(resp => resp.json()).then(data => {
            // console.log(isMounted.current);
            if (isMounted.current) {
                setState({
                    loading: false,
                    error: null,
                    data
                })
            }
        })
    }, [url]);

    return state;
}

export default useFetch;