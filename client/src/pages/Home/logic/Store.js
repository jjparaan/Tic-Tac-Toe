import { useSelector } from "react-redux";

const Store = () => {
	const storeState = {
		scores: useSelector((state) => state.scoreboard.list),
	};

	return { storeState };
};

export default Store;
