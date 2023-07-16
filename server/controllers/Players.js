import { PlayerOne } from "../models/Players.js";
import { PlayerTwo } from "../models/Players.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/notFound.js";

export const getPlayerOne = async (req, res) => {
	const { id: playerId } = req.params;
	const player = await PlayerOne.findOne({ _id: playerId });
	if (!player) {
		throw new NotFoundError("Player doesn't exist");
	}

	res.status(StatusCodes.OK).json({ player });
};

export const getPlayerTwo = async (req, res) => {
	const { id: playerId } = req.params;
	const player = await PlayerTwo.findOne({ _id: playerId });
	if (!player) {
		throw new NotFoundError("Player doesn't exist");
	}

	res.status(StatusCodes.OK).json({ player });
};

export const addPlayerOne = async (req, res) => {
	const player = await PlayerOne.create(req.body);
	res.status(StatusCodes.CREATED).json({ player });
};

export const addPlayerTwo = async (req, res) => {
	const player = await PlayerTwo.create(req.body);
	res.status(StatusCodes.CREATED).json({ player });
};

export const updatePlayerOne = async (req, res) => {
	const { id: playerId } = req.params;
	const player = await PlayerOne.findOneAndUpdate({ _id: playerId }, req.body, {
		new: true,
		runValidators: true,
	});
	if (!player) {
		throw new NotFoundError("Player doesn't exist");
	}

	res.status(StatusCodes.OK).json({ player });
};

export const updatePlayerTwo = async (req, res) => {
	const { id: playerId } = req.params;
	const player = await PlayerTwo.findOneAndUpdate({ _id: playerId }, req.body, {
		new: true,
		runValidators: true,
	});
	if (!player) {
		throw new NotFoundError("Player doesn't exist");
	}

	res.status(StatusCodes.OK).json({ player });
};
