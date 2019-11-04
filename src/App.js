import React, { Fragment, useEffect } from 'react';
import Routers from './Router'
import { Provider } from 'react-redux'
import { init } from './reducers'
import { loadUser } from './actions'
import setToken from './utils/setAuth'

if (localStorage.token) {
  setToken(localStorage.token)
}
const App = () => {
  const store = init()
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])


  return (

    <Provider store={store}>
      <Fragment>
        <Routers />
      </Fragment>
    </Provider>
  )
}

export default App;
