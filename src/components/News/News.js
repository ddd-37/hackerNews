import React, { Component } from "react";
import axios from "axios";
import Stories from "../UI/Story/Story";
import Story from "./../UI/Story/Story";

// TODO: Add error handling

class News extends Component {
  state = {
    loading: true,
    data: null
  };

  async componentDidMount() {
    try {
      const ids = await axios.get(
        'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$key"&limitToFirst=30'
      );

      const storyPromises = ids.data.map(id => {
        return axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
      });

      const stories = await Promise.all(storyPromises);

      this.setState({ loading: false, data: stories });
    } catch (error) {}
  }

  render() {
    let content = "Loading";
    if (!this.state.loading) {
      content = this.state.data.map((story, i) => {
        console.log("TCL: render -> story", story);
        return <Story key={story.data.id} index={i + 1} {...story.data} />;
      });
    }

    return <div>{content}</div>;
  }
}

export default News;
