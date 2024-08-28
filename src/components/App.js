import React from "react";
import blogData from "../data/blog";
import Header from "./Header"; // import it into App.js
import About from "./About"; // import it into App.js
import ArticleList from "./ArticleList"; // import it into App.js


function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}


export default App;
