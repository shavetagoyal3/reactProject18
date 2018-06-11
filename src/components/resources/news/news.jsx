import React from "react";
import NewsContent from "./news_content.jsx";

class News extends React.Component {
  componentWillMount() {
    const link = document.createElement("link");
    link.href = "./../../../assets/blog_css/main-style.min.css";
    link.rel = "stylesheet";
    document.body.appendChild(link);
  }
  render() {
    return (
        <div>          
          <NewsContent />
        </div>
    );
  }
}

export default News;