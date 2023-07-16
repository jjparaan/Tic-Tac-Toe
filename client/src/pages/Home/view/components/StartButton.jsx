import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const StartButton = () => {
	return (
		<Button variant="contained" startIcon={<PlayArrowIcon />}>
			Start a game
		</Button>
	);
};

export default StartButton;
