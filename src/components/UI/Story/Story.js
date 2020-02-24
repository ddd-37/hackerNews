import React from "react";
import moment from "moment";

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
        .split(/[/?#]/)
        .shift() +
      ")";
  }

  return (
    <div>
      <div>
        <a href={url}>
          <span style={{ color: "#9A9A9A" }}>{index}. &#9650;</span> {title}{" "}
          <span style={{ color: "#9A9A9A" }}>{domain}</span>
        </a>
      </div>
      <div>
        <span style={{ color: "#9A9A9A" }}>
          {score} points by {by} {moment(time * 1000).fromNow()} | hide |{" "}
          {descendants} comments
        </span>
      </div>
    </div>
  );
};

export default Story;
