import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import SingleBio from "./components/SingleBio";
import SinglePost from "./components/SinglePost";
import SingleProject from "./components/SingleProject";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/team" component={Team} exact />
          <Route path="/team/:bioSlug" component={SingleBio} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:slug" component={SinglePost} />
          <Route path="/creations" component={Projects} exact />
          <Route path="/creations/:projectSlug" component={SingleProject} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
