import React, { Component } from "react";
import ReactDOM from "react-dom";

// es6
class Button extends Component {

	localHandleClick = () => {
		this.props.localHandleClick(this.props.increment);
	}
	// Properties from 'Main component' 
	// this.props reads properties of parent component
	render() {
		return(
			<button onClick={() => this.localHandleClick()}>{ this.props.increment } </button>
		);
	}

}

class Result extends Component {

	render() {
		return(
			<div>{ this.props.localCounter }</div>
		);
	}

}
//Parent Component has the props for sibling components
class Main extends Component {

	constructor(props) {
		super(props);
		this.state = { counter: 6 };
	}

	handleClick = (increment) => {
		this.setState({ counter: this.state.counter+increment });
	}

	// We use localHandleClick to access the HandleClick method in the sibling
	// Component

	render() {
		return(
			<div>
				<Button localHandleClick={this.handleClick} increment={1} />
				<Button localHandleClick={this.handleClick} increment={5} />
				<Button localHandleClick={this.handleClick} increment={10} />
				<Button localHandleClick={this.handleClick} increment={100} />
				<Result localCounter={this.state.counter} />
			</div>
		);
	}

}

ReactDOM.render(
		<Main /> , document.querySelector("#root"));
