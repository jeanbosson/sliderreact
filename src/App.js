import { Component } from "react";
import Timer from "./Timer";
import TimerTable from "./TimerTable";
import Title from "./Title";
import style from "./App.module.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timers: [],
		};
	}

	saveTime = (time) => {
		const date = new Date();
		this.setState({
			timers: [...this.state.timers, { time, date }],
		});
		/* const newTimer = [...this.state.timers];
		newTimer.push(time);
		console.log("this.state", newTimer);
		//		console.log("franc", this.state.timers);
		this.setState({
			timers: newTimer,
		}); */

		/* this.setState({
			timers: [time],
		}); */
		console.log(this.state.timers);
	};
	render() {
		return (
			<div className={style.container}>
				<Title>Promodo Timer</Title>
				<Timer saveTime={this.saveTime} />
				<TimerTable timers={this.state.timers} />
			</div>
		);
	}
}

export default App;
