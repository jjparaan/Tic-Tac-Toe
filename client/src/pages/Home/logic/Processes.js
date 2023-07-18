const Processes = (store, state) => {
	// eslint-disable-next-line no-unused-vars
	const { defaultLocalState, localState, setLocalState } = state;

	// eslint-disable-next-line no-unused-vars
	const { storeState, storeActions } = store;

	const processes = {
		// Events
		doComponentDidMountActions: async () => {
			await setLocalState((prevState) => ({
				...prevState,
				isLoading: true,
				isMounted: false,
			}));
			await processes.retrieveScores();
			await setLocalState((prevState) => ({
				...prevState,
				isLoading: false,
				isMounted: true,
			}));
		},

		// Processes
		retrieveScores: async () => {
			const data = {
				winner: {
					pName: "",
				},
				playerOne: {
					pOneName: "",
					pOneWins: 1,
					pOneLosses: 0,
					pOneDraw: 0,
				},
				playerTwo: {
					pTwoName: "",
					pTwoWins: 0,
					pTwoLosses: 1,
					pTwoDraw: 0,
				},
			};

			await storeActions.retrieveScoreboard(data);
		},
	};

	return { processes };
};

export default Processes;
