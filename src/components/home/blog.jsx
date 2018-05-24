import React from "react";

class Blog extends React.Component {
  render() {
    return (
      <section className="blog">
        <div className="container">
          <h2 className="title title--black">LATEST NEWS AND INSIGHTS</h2>
          <div id="insightsPosts" />
        </div>
      </section>
    );
  }
}

export default Blog;
