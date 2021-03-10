import { HashRouter, Route } from "react-router-dom";
import Home from "../routes/Home";
import Review from "../routes/Review";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/review/:id" component={Review} />
      </HashRouter>
    </div>
  );
}

export default App;
