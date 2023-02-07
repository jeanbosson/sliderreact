import { Component } from "react";
import style from "./Timertable.module.css";

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

class TimerTable extends Component {
	render() {
		return (
			<table className={style["timers-table"]}>
				<thead>
					{" "}
					<tr>
						<th>Date</th>
						<th>Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						{this.props.timers.map((timer) => (
							<tr key={timer.date.getMilliseconds()}>
								<td>
									{timer.date.toLocaleDateString()} at{" "}
									{timer.date.toLocaleTimeString()}
								</td>
								<td>{SecondToHms(timer.time)}</td>
							</tr>
						))}
					</tr>
				</tbody>
			</table>
		);
	}
}

export default TimerTable;
