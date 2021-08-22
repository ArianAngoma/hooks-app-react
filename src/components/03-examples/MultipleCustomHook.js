import useFetch from "../../hooks/useFetch";
import useEnumerator from "../../hooks/useEnumerator";
import '../02-useEffect/effects.css';

const MultipleCustomHook = () => {
    // Llamamos al custom hook useEnumerator para hacer un counter a las frases
    const {counter, increment} = useEnumerator(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state);
    // console.log(loading);
    // console.log(data);

    // Si existe la data(true) extraer la posición 0 de data;
    const {author, quote} = !!data && data[0];
    // console.log(author, quote);

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ) : (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-0'>{quote}</p>
                        <footer className='blockquote-footer mt-1'>{author}</footer>
                    </blockquote>
                )
            }

            <button
                className='btn btn-primary'
                onClick={increment}>
                Siguiente frase
            </button>
        </div>
    )
}

export default MultipleCustomHook;