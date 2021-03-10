import { HashRouter, Route } from "react-router-dom";
import Home from "../routes/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
