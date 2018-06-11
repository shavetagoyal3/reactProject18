import React from "react";
import BlogContent from "./blog_content.jsx";

class Blog extends React.Component {
componentWillMount() {
    const link = document.createElement("link");
    link.href = "./../../../assets/blog_css/main-style.min.css";
    link.rel = "stylesheet";
    document.body.appendChild(link);
    }
  render() {
    return (
        <div>          
          <BlogContent />
        </div>
    );
  }
}

export default Blog;