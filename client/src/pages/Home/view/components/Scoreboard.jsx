/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#dee8ed",
	...theme.typography.body2,
	padding: theme.spacing(2),
	color: theme.palette.text.secondary,
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-around",
	gap: "10px",
}));

const Scoreboard = ({ scores }) => {
	return (
		<>
			<Box sx={{ width: "100%", marginTop: "20px" }}>
				<Grid container justifyContent="center" alignItems="center" spacing={2}>
					{scores.scores?.map((score, index) => (
						<Grid item xs={12} key={index}>
							<Item>
								<div className="top" style={{ alignSelf: "center" }}>
									Winner: {score.winner?.pName}
								</div>
								<div
									className="bottom"
									style={{ display: "flex", justifyContent: "space-between" }}
								>
									<div
										className="left"
										style={{
											display: "flex",
											gap: "10px",
										}}
									>
										<div className="name">
											Player 1 : {score.playerOne.pOneName}
										</div>
										<div className="wins">W :{score.playerOne.pOneWins}</div>
										<div className="losses">
											L :{score.playerOne.pOneLosses}
										</div>
										<div className="draw">D : {score.playerOne.pOneDraw}</div>
									</div>
									<div
										className="right"
										style={{
											display: "flex",

											gap: "10px",
										}}
									>
										<div className="name">
											Player 2 : {score.playerTwo.pTwoName}
										</div>
										<div className="wins">W :{score.playerTwo.pTwoWins}</div>
										<div className="losses">
											L :{score.playerTwo.pTwoLosses}
										</div>
										<div className="draw">D : {score.playerTwo.pTwoDraw}</div>
									</div>
								</div>
							</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
};

export default Scoreboard;
