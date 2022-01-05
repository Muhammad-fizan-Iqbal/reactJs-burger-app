import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "../../../axios";
import FullPost from "../FullPost/FullPost";
import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 3);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Allah Uh Akbar",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(
        (error) => console.log(error)
        // this.setState({ error: true })
      );
  }
  postSelectedhandler = (id) => {
    this.props.history.push({ pathname: "/posts/" + id });
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something Wrong...</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          // <Link to={"/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedhandler(post.id)}
          />
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>;
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
