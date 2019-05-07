import {combineReducers} from 'redux'

const context:any = (require as any).context('../../pages/', true, /Reducer\.ts$/);
const keys = context.keys();

const reducers = keys.reduce((reducer:any,key:any) => {
  let name = key.match(/model\/(\S*)Reducer\.ts/)[1]
  // 模块名作为key
  reducer[name] = context(key).default
  return reducer
}, {})

let rootReducers = combineReducers(reducers)
export default rootReducers