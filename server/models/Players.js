import mongoose, { Schema } from "mongoose";

const PlayerOneSchema = new Schema(
	{
		name: {
			type: String,
			default: "Player1",
		},
		wins: {
			type: Number,
			default: 0,
		},
		losses: {
			type: Number,
			default: 0,
		},
		draw: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

const PlayerTwoSchema = new Schema(
	{
		name: {
			type: String,
			default: "Player2",
		},
		wins: {
			type: Number,
			default: 0,
		},
		losses: {
			type: Number,
			default: 0,
		},
		draw: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

export const PlayerOne = mongoose.model("PlayerOne", PlayerOneSchema);
export const PlayerTwo = mongoose.model("PlayerTwo", PlayerTwoSchema);
