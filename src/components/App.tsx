import { HashRouter, Route } from "react-router-dom";
import Home from "../routes/Home";
import ReviewDetail from "../routes/ReviewDetail";
import ReviewerDetail from "../routes/ReviewerDetail";
import SearchDetail from "../routes/SearchDetail";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/review/:title" component={ReviewDetail} />
        <Route path="/reviewer/:reviewer" component={ReviewerDetail} />
        <Route path="/search/:query" component={SearchDetail} />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
