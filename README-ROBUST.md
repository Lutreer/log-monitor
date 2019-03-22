- 添加prettire，格式化代码，需在编辑器中添加插件：Prettier - Code formatter
- 添加依赖`npm i babel-plugin-import --save-dev`实现按需加载,新建文件`.babelrc`,并添加相关代码:(要删掉package.json中的babel配置，以免重复)
```
{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css"
    }]
  ]
}
```

- 添加 react-app-rewired