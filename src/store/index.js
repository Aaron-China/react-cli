import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { createReducer } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

// if ( process.env.NODE_ENV === `development` ) {
//   const { createLogger } = require(`redux-logger`)
//   const loggerMiddleware = createLogger()
//   middlewares.push(loggerMiddleware)
// }

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  )

  sagaMiddleware.run(rootSaga)

  /*
   if ( process.env.NODE_ENV === 'development' ) {
   if ( module.hot ) {
   module.hot.accept('./reducers.index', () => {
   store.replaceReducer(createReducer(store.asyncReducers))
   })
   }
   }
   */

  store.runSaga = sagaMiddleware.run
  store.asyncReducers = store.asyncReducers || {}
  store.asyncSagas = store.asyncSagas || []
  return store
}

export const injectAsyncReducer = ({ name, asyncReducer, store }) => {
  if ( store.asyncReducers[name] )
    return

  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
}

export const injectAsyncSagas = ({ name, sagas, store }) => {
  if ( !store.asyncSagas.includes(name) ) {
    sagas.forEach(store.runSaga)
    store.asyncSagas.push(name)
  }
}

export default configureStore({})