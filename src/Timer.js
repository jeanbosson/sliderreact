import { Component } from "react";
import style from "./timer.module.css";

function SecondToHms(timeInSeconds) {
	timeInSeconds = Number(timeInSeconds);
	const h = Math.floor(timeInSeconds / 3600);
	const m = Math.floor((timeInSeconds % 3600) / 60);
	const s = Math.floor((timeInSeconds % 3600) % 3600);

	const hDisplay = h < 10 ? "0" + h : h;
	const mDisplay = h < 10 ? "0" + m : m;
	const sDisplay = h < 10 ? "0" + s : s;

	return `${hDisplay}: ${mDisplay}: ${sDisplay}`;
}

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isTimerStarted: false,
			//ici en premier
			time: 0,
		};
	}

	handleStartTimer = () => {
		if (this.state.isTimerStarted) {
			clearInterval(this.timerId); //1 pour remettre a zero
			//si cest vrai on veut arreter
			this.props.saveTime(this.state.time);

			this.setState({
				isTimerStarted: false,
				time: 0, //pour remettre a zero
			});
		} else {
			this.setState({
				// si cest false on veut demarrer
				isTimerStarted: true,
			});

			this.timerId = setInterval(() => {
				this.setState(({ time }) => {
					return {
						time: time + 1,
						//incrementation
					};
				});
			}, 1000);
		}
	};

	render() {
		return (
			<div>
				<h1 className={style["clock-timer"]}>{SecondToHms(this.state.time)}</h1>
				<button
					className={`${style["clock-btn"]} ${
						style[`clock-btn-${this.state.isTimerStarted ? "Stop" : "Start"}`]
					} `}
					onClick={this.handleStartTimer}
				>
					{this.state.isTimerStarted ? "Stop" : "Start"}
				</button>
			</div>
		);
	}
}

export default Timer;
