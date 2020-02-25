import React from "react";

// Component used to display the story title, domain it's from, and create links to both
// eg. Early Riser or Night Owl? New Study Helps to Explain the Difference (directorsblog.nih.gov)
const StoryTitleDomainLink = ({ url, title }) => {
  // The URLs get a little tricky.
  let domain = "";
  if (!url) {
    // TODO
    // If the story comes from HN, there is no URL supplied. We need to create a request to get to the story
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

  // TODO
  // The domain link below needs to preform a query for all Hn stories related to that domain
  return (
    <>
      <span>&#9650;</span>
      <a href={url}>{title}</a>

      <span className="Story__domain"> {domain}</span>
    </>
  );
};

export default StoryTitleDomainLink;
