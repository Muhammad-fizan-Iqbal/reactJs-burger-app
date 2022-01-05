import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "../Blog/Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
import "./Blog.css";
// import NewPost from "./NewPost/NewPost";
const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});
class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active "
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts/" component={Posts} />
          <Route render={() => <h1>NOT FOUND</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
