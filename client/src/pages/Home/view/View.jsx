import Title from "./components/Title";
import StartButton from "./components/StartButton";
import Scoreboard from "./components/Scoreboard";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

// eslint-disable-next-line react/prop-types
const View = ({ localState, scores }) => {
	return (
		<>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				sx={{
					bgcolor: "#dee8ed",
					width: "100%",
					height: "100vh",
					padding: "20px",
				}}
			>
				<Paper
					elevation={3}
					sx={{
						width: "100%",
						maxWidth: "1000px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						padding: "20px",
					}}
				>
					<Title />
					<StartButton />
					<Scoreboard localState={localState} scores={scores} />
				</Paper>
			</Grid>
		</>
	);
};

export default View;
