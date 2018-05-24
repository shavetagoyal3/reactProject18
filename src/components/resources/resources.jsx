import React from "react";
import StaticPageTitle from "./static_page_title.jsx";
import PostsContainer from "./posts_container.jsx";
import DocumentsBanner from "./documents_banner.jsx";

class Resources extends React.Component {
  render() {
    return (
        <div>
        	<StaticPageTitle />
        	<PostsContainer />
        	<DocumentsBanner />
        </div>
    );
  }
}

export default Resources;