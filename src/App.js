import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App = () => {
  let pageSize = 15;
  let apiKey = process.env.REACT_APP_NEWS_API
    return (
      <>
      <Router>
        <NavBar/>
        <LoadingBar/>
          <Routes>
            <Route exact path="/" element={<News  pageSize={pageSize} key="general" apiKey={apiKey} country="in" category="general"/>}/>
            <Route exact path="/business" element={<News  pageSize={pageSize} key="business" apiKey={apiKey} country="in" category="business"/>}/>
            <Route exact path="/entertainment"  element={<News  pageSize={pageSize} key="entertainment" apiKey={apiKey} country="in" category="entertainment"/>}/>
            <Route exact path="/health" element={<News  pageSize={pageSize} key="health" apiKey={apiKey} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News  pageSize={pageSize} key="science" apiKey={apiKey} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News  pageSize={pageSize} key="sports" apiKey={apiKey} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News  pageSize={pageSize} key="technology" apiKey={apiKey} country="in" category="technology"/>}/>
          </Routes>
      </Router>
      </>
    );
}

export default App;
