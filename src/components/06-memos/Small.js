import React from "react";

const Small = React.memo(({value}) => {
    // memo -> es para memorizar algo y si solo sus props cambian se volverá a renderizar, si no, uzará la versión memorizada

    console.log('Me volví a llamar');

    return (
        <small>{value}</small>
    )
});

export default Small;