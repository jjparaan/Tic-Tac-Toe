/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import axios from "axios";
import { setErrorResponse } from "../../utils/helpers";

import { GET_RESPONSE, GET_SCOREBOARD } from "../types";

const _doActions = async (sourceAction, response, dispatch) => {
	let resp = {};
	switch (sourceAction) {
		case "retrieve":
			switch (response.status) {
				case 200:
					// eslint-disable-next-line no-case-declarations
					const list = await response.data;
					await dispatch({ type: GET_SCOREBOARD, list });

					resp = {
						status: "success",
						message: "Fetch success",
					};
					await dispatch({ type: GET_RESPONSE, resp });
					break;
				default:
					setErrorResponse(response, dispatch);
			}
			break;
		default:
	}
};

const initialState = {
	list: {},
	response: {},
};

export const actionCreators = {
	retrieve: (data) => async (dispatch, getState) => {
		const response = await axios
			.get(`http://localhost:5000/api/scoreboard`, { params: data })
			.then(async (response) => {
				await _doActions("retrieve", response, dispatch);
			})
			.catch(async (error) => {
				await setErrorResponse(error.response, dispatch);
				await Swal.fire({
					title: "Error",
					text: `Something went wrong.`,
					showConfirmButton: false,
					icon: "error",
					timer: 2000,
					allowOutsideClick: false,
				});
			});
	},
};

export const reducer = (state, action) => {
	state = state || initialState;

	switch (action.type) {
		case GET_RESPONSE: {
			return {
				...state,
				response: action.resp,
			};
		}
		case GET_SCOREBOARD: {
			return {
				...state,
				list: action.list,
			};
		}
		default:
			return state;
	}
};
