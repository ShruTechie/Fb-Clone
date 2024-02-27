import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Siderbar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";

function App() {
	return (
		<div className='app'>
					<Header />
					<div className="app__body">
						<Sidebar/>
						<Feed/>
						<Widgets/>
					</div>
		</div>
	);
}

export default App;