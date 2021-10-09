import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

window.renderAbout = (containerId) => {
  console.log('renderAbout', { containerId })
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(containerId)
  )
  reportWebVitals()
}

window.unmountAbout = (containerId) => {
  console.log('unmountAbout', { containerId })
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}
