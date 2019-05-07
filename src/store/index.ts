import { applyMiddleware, compose, createStore, combineReducers } from 'redux'//compose 方法我们以后再用
import reducers from './reducer'//combine后的所有reducers
import sagas from './saga'//combine后的所有reducers
import createLoggerMiddleware from 'redux-logger'

// import thunk from 'redux-thunk'//用于异步请求:applyMiddleware(thunk)，也可以用redux-promise 或 redux-saga
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()
// const loggerMiddleware = createLoggerMiddleware()

/**
 * compose:从右到左来组合多个函数(reduceRight, currying)
 * @returns a new createStore
 */
const middlewares = [createLoggerMiddleware, sagaMiddleware]

let storyFactory = compose(applyMiddleware(...middlewares))(createStore)

/**
 * finnalCreateStore 一个app只能有一个store
 * @param initialstate
 * @returns {*}
 */
let configureStore = storyFactory(reducers)


// 运行saga
// sagaMiddleware.run(sagas)

export default configureStore


// 如果不用compose(), 可以直接createStore(),注意参数顺序！
// const store = createStore(
//     reducers,
//     initial_state,
//     // enhancer
//     applyMiddleware(...middlewares)
// );
// sagaMiddleware.run(sagas)
// export default  store