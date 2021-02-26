import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
        {/* Important */}
        {/* <Layout>
        <TopNavigation></TopNavigation>
        <ContentSection>
          <ContentColLeft></ContentColLeft>
          <ContentColRight></ContentColRight>
        </ContentSection>
      </Layout> */}
      </div>
    </Router>
  );
}

export default App;
