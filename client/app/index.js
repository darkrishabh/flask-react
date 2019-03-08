import 'babel-polyfill';
import React from 'react'
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                Hellow
            </div>
        )
    }
}



function render() {
    const root = document.getElementById("app");
    ReactDOM.render(<App/>, root);
}

render();