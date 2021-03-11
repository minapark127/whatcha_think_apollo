import { HashRouter, Route } from "react-router-dom";
import Home from "../routes/Home";
import ReviewDetail from "../routes/ReviewDetail";
import ReviewerDetail from "../routes/ReviewerDetail";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/review/:title" component={ReviewDetail} />
        <Route path="/reviewer/:reviewer" component={ReviewerDetail} />
      </HashRouter>
    </div>
  );
}

export default App;
