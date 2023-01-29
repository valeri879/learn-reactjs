import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Welcome extends React.Component {
	render() {
		console.log(this.props);
		return (
			<h1>Hello, {this.props.name} {this.props.lastName}</h1>
		);
	}
}

/* function Welcome(props) {
	console.log(props);
	return <h1>Hello, {props.name} {props.lastName}</h1>;
} */

const element = <Welcome lastName="Nickolson" name="Sara" />;

root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
