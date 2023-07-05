import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
				<App />
	</React.StrictMode>
);
