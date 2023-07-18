import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { storeActionCreators } from "../../../store/storeActions";

const Store = () => {
	const storeState = {
		scores: useSelector((state) => state.scoreboard.list),
	};

	const dispatch = useDispatch();
	const storeActions = bindActionCreators(storeActionCreators, dispatch);
	return { storeState, storeActions };
};

export default Store;
