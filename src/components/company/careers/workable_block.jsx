import React from "react";

class WorkableBlock extends React.Component {
  render() {
    return (
      <section className="workable-block__container">
        <div className="container">
          <div className="workable-block">
            <h2 className="workable-block__title">Work at Intellectsoft </h2>
            <div className="workable-block__lead">
              Haven’t found the position you’re interested in? Send us your CV
              and we’ll get in touch as soon as a perfect opportunity becomes
              available!{" "}
            </div>
            <a
              className="button workable-block__button"
              href="https://intellectsoft.workable.com/jobs/585405"
              target="_blank"
            >
              Upload CV
            </a>
          </div>
          <div className="workable-block">
            <h2 className="workable-block__title">Relocation Opportunities </h2>
            <div className="workable-block__lead">
              We’re looking for experienced developers for our international and
              multicultural team in Norway and the US. Send us your CV!{" "}
            </div>
            <a
              className="button workable-block__button"
              href="https://intellectsoft.workable.com/jobs/566352"
              target="_blank"
            >
              Upload CV
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkableBlock;
