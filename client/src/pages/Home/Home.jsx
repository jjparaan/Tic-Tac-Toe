import { useEffect } from "react";
import View from "./view/View";
import Store from "./logic/Store";
import State from "./logic/State";
import Processes from "./logic/Processes";
import Events from "./logic/Events";

const Home = () => {
	const store = Store();

	const state = State();

	const processes = Processes(store, state);

	const events = Events(processes);

	useEffect(() => {
		events.events.doComponentDidMountActions();
	}, []);

	return (
		<>
			<View localState={state.localState} scores={store.storeState.scores} />
		</>
	);
};

export default Home;
