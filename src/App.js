import React, { Component } from 'react'
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import reducers from './reducers'
import middlewares from './middlewares'

const store = createStore(reducers, compose(
  middlewares,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
))

class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }

}

export default App
