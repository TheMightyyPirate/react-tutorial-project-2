import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {
  apiKey = "e435bcc06a8549ffa0f8aa328bc9e4f7";
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  apiKey={this.apiKey}
                  pageSize={12}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  apiKey={this.apiKey}
                  pageSize={12}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  apiKey={this.apiKey}
                  pageSize={12}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  apiKey={this.apiKey}
                  pageSize={12}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  apiKey={this.apiKey}
                  pageSize={12}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  apiKey={this.apiKey}
                  pageSize={12}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technolgy"
                  apiKey={this.apiKey}
                  pageSize={12}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  apiKey={this.apiKey}
                  pageSize={12}
                  country="us"
                  category="general"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
