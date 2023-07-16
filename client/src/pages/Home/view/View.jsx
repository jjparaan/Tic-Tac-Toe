import Title from "./components/Title";
import StartButton from "./components/StartButton";
import Scoreboard from "./components/Scoreboard";
import "./View.scss";

const View = () => {
	return (
		<div className="view">
			<Title />
			<StartButton />
			<Scoreboard />
		</div>
	);
};

export default View;
