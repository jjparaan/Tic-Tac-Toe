import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/game",
		element: <Game />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
