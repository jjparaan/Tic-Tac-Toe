import express from "express";
import {
	getAllScores,
	addScore,
	searchScore,
} from "../controllers/Scoreboard.js";

export const scoreboardRouter = express.Router();

scoreboardRouter.route("/").get(getAllScores).post(addScore);
scoreboardRouter.route("/search").get(searchScore);
