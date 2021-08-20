import React from 'react';
import ReactDOM from 'react-dom';
// import HooksApp from "./HooksApp";
// import EnumeratorApp from "./components/01-useState/EnumeratorApp";
import EnumeratorWithCustomHook from "./components/01-useState/EnumeratorWithCustomHook";

ReactDOM.render(
    // Hook useState
    //<EnumeratorApp/>,

    // Counter with custom hook
    <EnumeratorWithCustomHook/>,
    document.getElementById('root')
);