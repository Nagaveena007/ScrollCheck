import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import MyPage from './components/MyPage'


function App() {
  return (
    <Router>
        <div className="App" />
        <Route exact path="/" component={MyPage} />
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
