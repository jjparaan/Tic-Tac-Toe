import { useState } from "react";

const State = () => {
	const localStateObj = {
		isLoading: false,
	};
	const defaultLocalState = { ...localStateObj };
	const [localState, setLocalState] = useState(localStateObj);

	return {
		defaultLocalState,
		localState,
		setLocalState,
	};
};

export default State;
