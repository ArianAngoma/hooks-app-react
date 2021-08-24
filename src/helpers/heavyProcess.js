const heavyProcess = (iterations) => {
    for (let i = 0; i < iterations; i++) {
        console.log('Vamos');
    }

    return `${iterations} iteraciones realizadas`;
}

export default heavyProcess;