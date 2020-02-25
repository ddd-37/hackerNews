import React, { Component } from "react";
import axios from "axios";

class StoryComments extends Component {
  state = {
    loading: true,
    data: null,
    error: null
  };
  // Because the API provided by HackerNews doesn't give us a sucinct way to pull all the comments for a story at once
  // They only give s alist of the comment IDs with each story, which means we would need to make individual requests
  // for each story. We can use the search API from 'https://hn.algolia.com/api' to get all comments in one go
  async componentDidMount() {
    console.log(this.props);
    const { storyId } = this.props.match.params;
    const comments = await axios.get(
      `http://hn.algolia.com/api/v1/search?tags=comment,story_${storyId}`
    );
    console.log(
      "TCL: StoryComments -> componentDidMount -> comments",
      comments
    );
  }
  render() {
    return <div>StoryComments</div>;
  }
}

export default StoryComments;
