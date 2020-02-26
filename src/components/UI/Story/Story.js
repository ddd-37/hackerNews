import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import StoryTitleDomainLink from "./../StoryTitleDomainLink/StoryTitleDomainLink";

const Story = ({ index, by, id, score, time, title, url, descendants }) => {
  // Convert to time story was created from now
  const fromNow = moment(time * 1000).fromNow();

  return (
    <div className="Story">
      <div>
        <span>{index}.</span>
        <StoryTitleDomainLink url={url} title={title} />
      </div>
      <div className="Story__lower">
        <span>
          {score} points by <Link to={`/user/${by}`}>{by} </Link>
          {fromNow} | hide | {descendants} comments
        </span>
      </div>
    </div>
  );
};

export default Story;
