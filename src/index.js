import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path ='/' element={<App></App>}>
      </Route>
    </Routes>
  </Router>,
);
