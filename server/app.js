import dotenv from "dotenv";
import express from "express";
import expressAsyncErrors from "express-async-errors";
import rateLimiter from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import xss from "xss-clean";
import { connectDB } from "./db/connectDB.js";
import { scoreboardRouter } from "./routers/Scoreboard.js";
import { playerOneRouter } from "./routers/Players.js";
import { playerTwoRouter } from "./routers/Players.js";
import { pageNotFoundMiddleware } from "./middlewares/pageNotFound.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

app.set("trust proxy", 1);
app.use(
	rateLimiter({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100,
	})
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use("/api/scoreboard", scoreboardRouter);
app.use("/api/playerOne", playerOneRouter);
app.use("/api/playerTwo", playerTwoRouter);

app.use(pageNotFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
