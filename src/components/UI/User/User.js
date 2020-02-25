import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";

class User extends Component {
  state = {
    loading: true,
    userData: null,
    error: null
  };

  async componentDidMount() {
    const { userId } = this.props.match.params;
    if (userId) {
      const userData = await axios.get(
        `https://hacker-news.firebaseio.com/v0/user/${userId}.json`
      );

      this.setState({ userData });
    }
  }
  render() {
    if (this.state.userData) {
      console.log(this.state.userData.data);
      const { id, created, karma, about } = this.state.userData.data;
      console.log("TCL: User -> render -> about", about);

      return (
        <div className="User">
          <div>
            <p className="User__type">user:</p>
            <p className="User__type">created:</p>
            <p className="User__type">karma:</p>
            <p className="User__type">about:</p>
          </div>
          <div>
            <p>{id}</p>
            <p style={{ color: "black" }}>
              {moment(created * 1000).format("LL")}
            </p>
            <p>{karma}</p>
            {about && (
              <span className="User__about">{ReactHtmlParser(about)}</span>
            )}
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

export default User;
