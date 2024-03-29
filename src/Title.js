import { Component } from "react";
import "./Title.css";

class Title extends Component {
	render() {
		return <h1 className="title">{this.props.children}</h1>;
	}
}

export default Title;
