import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

window.renderAbout = (containerId, history) => {
  // console.log('renderAbout', { containerId })
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(containerId)
  )
  reportWebVitals()
}

window.unmountAbout = (containerId) => {
  console.log('unmountAbout', {
    containerId,
    containerIdNode: document.getElementById(containerId),
  })
  const unmounted = ReactDOM.unmountComponentAtNode(
    document.getElementById(containerId)
  )
  return unmounted
}
