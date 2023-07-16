import express from "express";
import {
	getPlayerOne,
	getPlayerTwo,
	addPlayerOne,
	addPlayerTwo,
	updatePlayerOne,
	updatePlayerTwo,
} from "../controllers/Players.js";

export const playerOneRouter = express.Router();
export const playerTwoRouter = express.Router();

playerOneRouter.route("/").post(addPlayerOne);
playerOneRouter.route("/:id").get(getPlayerOne).patch(updatePlayerOne);

playerTwoRouter.route("/").post(addPlayerTwo);
playerTwoRouter.route("/:id").get(getPlayerTwo).patch(updatePlayerTwo);
