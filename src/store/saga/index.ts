const context:any = (require as any).context('../../pages/', true, /\.saga\.ts$/);
const keys = context.keys();

const sagas = keys.reduce((saga:any,key:any) => {
  let name = key.match(/model\/(\S*)\.saga\.ts/)[1]
  // 模块名作为key
  saga[name] = context(key).default
  return saga
}, {})

export default sagas