import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Story = ({ index, by, id, score, time, title, url, descendants }) => {
  // The URLs get a little tricky.
  let domain = "";
  let linkToComments = "";
  if (!url) {
    // TODO
    // If the story comes from HN, there is no URL supplied. We need to create a request to get to the story
    // Also the link to the comments should take the user to the actual story
    console.log(id);
  } else {
    // Else we need to extract just the domain name to display
    domain =
      "(" +
      url
        .replace("http://", "")
        .replace("https://", "")
        .replace("www.", "")
        .split(/[/?#]/)
        .shift() +
      ")";

    // Because we need to display a few data points about the story in the comments section,
    // let's create a var we can pass as state to the Link component
    const storyInfo = { by, id, score, time, title, url, domain };
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
        <span>{index}. &#9650;</span> <a href={url}>{title}</a>
        <span className="Story__domain">{domain}</span>
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
