const Events = ({ processes }) => {
	const events = {
		doComponentDidMountActions: async () => {
			await processes.doComponentDidMountActions();
		},
	};

	return { events };
};

export default Events;
