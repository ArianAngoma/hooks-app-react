import React from 'react';
import ReactDOM from 'react-dom';
// import HooksApp from "./HooksApp";
// import EnumeratorApp from "./components/01-useState/EnumeratorApp";
// import EnumeratorWithCustomHook from "./components/01-useState/EnumeratorWithCustomHook";
import SimpleForm from "./components/02-useEffect/SimpleForm";

ReactDOM.render(
    // Hook useState
    // <EnumeratorApp/>,

    // Counter with custom hook
    // <EnumeratorWithCustomHook/>,

    // Hook useEffect
    <SimpleForm/>,
    document.getElementById('root')
);