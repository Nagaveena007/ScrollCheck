import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { createNotification } from "./components/Notification";
import { NotificationContainer } from "react-notifications";
/* function App() {
  return (
    <Router>
        <div className="App" />
        <Route exact path="/" component={MyPage} />
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
 */
function App() {
  return (
    <div className="App">
      <button
        className="btn btn-danger"
        onClick={createNotification("success")}
      >
        Error
      </button>
      <NotificationContainer />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);