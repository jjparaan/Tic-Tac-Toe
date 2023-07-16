import mongoose from "mongoose";

const { Schema } = mongoose;

const ScoreboardSchema = new Schema(
	{
		playerOne: {
			pOneName: {
				type: String,
				required: [true, "playerOne name field is expecting a value"],
			},
			pOneWins: {
				type: Number,
				required: [true, "playerOne wins field is expecting a value"],
			},
			pOneLosses: {
				type: Number,
				required: [true, "playerOne losses field is expecting a value"],
			},
			pOneDraw: {
				type: Number,
				required: [true, "playerOne draw field is expecting a value"],
			},
		},
		playerTwo: {
			pTwoName: {
				type: String,
				required: [true, "playerTwo name field is expecting a value"],
			},
			pTwoWins: {
				type: Number,
				required: [true, "playerTwo wins field is expecting a value"],
			},
			pTwoLosses: {
				type: Number,
				required: [true, "playerTwo losses field is expecting a value"],
			},
			pTwoDraw: {
				type: Number,
				required: [true, "playerTwo draw field is expecting a value"],
			},
		},
	},
	{ timestamps: true }
);

export const Scoreboard = mongoose.model("Scoreboard", ScoreboardSchema);
