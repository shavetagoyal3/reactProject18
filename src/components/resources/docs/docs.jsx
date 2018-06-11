import React from "react";
import DocsContent from "./docs_content.jsx";
import FormWrap from "./form_wrap.jsx";
import BlogGrid from "./blog_grid.jsx";
import Cemetery from "./cemetery.jsx";

class Docs extends React.Component {
componentWillMount() {
    const link = document.createElement("link");
    link.href = "./../../../assets/blog_css/main-style.min.css";
    link.rel = "stylesheet";
    document.body.appendChild(link);
    }
  render() {
    return (
        <div>          
          <DocsContent />
          <FormWrap />
          <BlogGrid />
          <Cemetery />
        </div>
    );
  }
}

export default Docs;