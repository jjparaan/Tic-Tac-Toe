import { Scoreboard } from "../models/Scoreboard.js";
import { StatusCodes } from "http-status-codes";

export const getAllScores = async (req, res) => {
	const scores = await Scoreboard.find({});
	res.status(StatusCodes.OK).json({ count: scores.length, scores });
};

export const addScore = async (req, res) => {
	const score = await Scoreboard.create(req.body);
	res.status(StatusCodes.CREATED).json({ score });
};

export const searchScore = async (req, res) => {
	const { name } = req.query;
	const queryObject = {};

	if (name) {
		queryObject.name = { $regex: name, $options: "i" };
	}

	let result = Scoreboard.find(queryObject);

	const scoreboards = await result;
	res.status(StatusCodes.OK).json({ count: scoreboards.length, scoreboards });
};
