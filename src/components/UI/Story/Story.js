import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Story = ({ index, by, id, score, time, title, url, descendants }) => {
  // The URLs get a little tricky.
  let domain = "";
  if (!url) {
    // If the story comes from HN, there is no URL supplied. We need to create a request to get to the story
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
  }

  return (
    <div className="Story">
      <div>
        <span>{index}. &#9650;</span> <a href={url}>{title}</a>{" "}
        <span className="Story__domain">{domain}</span>
      </div>
      <div className="Story__lower">
        <span>
          {score} points by <Link to={`/user/${by}`}>{by}</Link>{" "}
          {moment(time * 1000).fromNow()} | hide | {descendants} comments
        </span>
      </div>
    </div>
  );
};

export default Story;
