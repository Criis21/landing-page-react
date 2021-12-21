import "../styles/App.scss";
import FormCallToAction from "./component/FormCallToAction.jsx";
import SocialTopNav from "./component/SocialTopNav.jsx";
import Jumbotron from "./component/Jumbotron.jsx";

function App() {
	return (
		<div className="App">
			<SocialTopNav />
			<Jumbotron />
			<FormCallToAction />
		</div>
	);
}

export default App;
