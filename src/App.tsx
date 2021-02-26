import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout/>
      {/* Important */}
      {/* <Layout>
        <TopNavigation></TopNavigation>
        <ContentSection>
          <ContentColLeft></ContentColLeft>
          <ContentColRight></ContentColRight>
        </ContentSection>
      </Layout> */}
    </div>
  );
}

export default App;
