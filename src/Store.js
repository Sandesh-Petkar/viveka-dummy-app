import {createStore,applyMiddleware} from 'redux'
import createMiddleware from 'redux-saga'
import rootSaga from './RootSaga'
import rootReducer from './Redux/Reducers/RootReducer'

const sagaMiddleware=createMiddleware()



const Store=createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default Store