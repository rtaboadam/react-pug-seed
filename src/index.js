import React from "react";
import ReactDOM from "react-dom";
import '../scss/app.scss';
import Header from './components/Header';
import PugReactComponent from './components/PugReactComponent';

class HelloMessage extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
                <PugReactComponent/>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, App);