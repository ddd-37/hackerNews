import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import StoryTitleDomainLink from "./../StoryTitleDomainLink/StoryTitleDomainLink";

const Story = ({ index, by, id, score, time, title, url, descendants }) => {
  let linkToComments = "";
  if (!url) {
    // TODO
    // If the story comes from HN, the link to the comments should take the user to the actual story
    console.log(id);
  } else {
    // Because we need to display a few data points about the story in the comments section,
    // let's create a var we can pass as state to the Link component
    const storyInfo = { by, id, score, time, title, url };
    linkToComments = (
      <Link to={{ pathname: `/storycomments/${id}`, state: { ...storyInfo } }}>
        {descendants} comments
      </Link>
    );
  }

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
          {fromNow} | hide | {linkToComments}
        </span>
      </div>
    </div>
  );
};

export default Story;
