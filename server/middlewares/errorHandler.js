import { CustomAPIErrors } from "../errors/customAPI.js";
import { StatusCodes } from "http-status-codes";

export const errorHandlerMiddleware = (err, req, res, next) => {
	let customError = {
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		msg: err.message || "Oops! Something went wrong. Please try again later",
	};

	if (err.name === "ValidationError") {
		customError.statusCode = StatusCodes.BAD_REQUEST;
		customError.msg = Object.values(err.errors)
			.map((item) => item.message)
			.join(", ");
	}

	if (err.name === "CastError") {
		customError.statusCode = StatusCodes.NOT_FOUND;
		customError.msg = `No player found that matches the id: ${err.value}`;
	}

	res.status(customError.statusCode).json({ msg: customError.msg });
};
