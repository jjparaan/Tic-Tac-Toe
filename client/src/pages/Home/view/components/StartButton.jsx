import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const StartButton = () => {
	return (
		<Button variant="contained" startIcon={<PlayArrowIcon />}>
			<Link to="/game" style={{ textDecoration: "none", color: "white" }}>
				Start a game
			</Link>
		</Button>
	);
};

export default StartButton;
