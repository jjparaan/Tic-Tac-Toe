// eslint-disable-next-line no-unused-vars
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material/";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	color: theme.palette.text.secondary,
	display: "flex",
	justifyContent: "space-between",
}));

const Scoreboard = () => {
	return (
		<>
			<div className="scoreboard">
				<Typography variant="h5" gutterBottom>
					Scoreboard :
				</Typography>
				<Box sx={{ width: "100%" }}>
					<Stack spacing={2}>
						<Item>
							<div className="left">
								<Typography variant="h7" gutterBottom>
									Winner :
								</Typography>
							</div>
							<div className="right">
								<Typography variant="h7" gutterBottom>
									Record :
								</Typography>
							</div>
						</Item>
					</Stack>
				</Box>
			</div>
		</>
	);
};

export default Scoreboard;
