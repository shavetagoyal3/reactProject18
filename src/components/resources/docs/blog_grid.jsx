import React from "react";

class BlogGrid extends React.Component {
  render() {
    return (
      <section className="blog-grid">
        <div className="container">
          <div className="blog-grid__left blog-single">
            <div className="block-title">
              <h2 className="blog-grid__title">Intellectsoft Blog</h2>
              <a href="blog/index.html" className="block-title__link">
                All blog<i className="link-arrow" />
              </a>
            </div>
            <div id="featuredPost" />
          </div>
          <div className="blog-grid__right block-video cf">
            <div className="block-title">
              <h2 className="blog-grid__title">Video</h2>
            </div>
            <div className="block-video__item">
              <div className="block-video__wrapper">
                <iframe
                  src="https://www.youtube.com/embed/vOlRxVTP5FE?rel=0&showinfo=0"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="block-video__item">
              <div className="block-video__wrapper">
                <iframe
                  src="https://www.youtube.com/embed/z5AitVmKiFQ?rel=0&showinfo=0"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogGrid;
