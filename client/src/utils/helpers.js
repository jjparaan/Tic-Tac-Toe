import { GET_RESPONSE } from "../store/types";

export const setErrorResponse = async (response, dispatch, type = null) => {
	let resp = {};
	let errorMessage = response ? response.statusText : "Something went wrong";
	try {
		const data = await response.data;
		errorMessage = data.message
			? data.message
			: data.Description
			? data.Description
			: "Something went wrong";
	} catch (error) {
		/* empty */
	}
	resp = {
		status: "error",
		message: errorMessage,
	};
	await dispatch({ type: type ? type : GET_RESPONSE, resp });
};
