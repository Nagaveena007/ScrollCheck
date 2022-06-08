import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'

import ScrollCheck from './pages/ScrollCheck'

const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return children || null
})

function App() {
  return (
    <Router>
        <div className="App" />
        <Route exact path="/" component={ScrollCheck} />
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
