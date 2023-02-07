import { Component } from "react";
import "./Button.css";

class Button extends Component {
	render() {
		return <button className="buttonStyle">{this.props.children}</button>;
	}
}

export default Button;
