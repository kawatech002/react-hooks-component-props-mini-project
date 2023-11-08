import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App(props) {
  return (
    <div className="App">
      <Header/>
      <About/>
      <ArticleList/>
    </div>
  );
}

export default App;
