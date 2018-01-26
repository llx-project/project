## llx项目体系

### 目录结构
````
|____.babelrc
|____.eslintrc
|____.gitignore
|____build  
| |____config.js
| |____server.js
| |____webpack.common.js
| |____webpack.dev.js
| |____webpack.prd.js
|____package.json
|____README.md
|____src
| |____app.jsx
| |____common
| | |____api
| | | |____user.js
| | |____asset
| | | |____index.css
| | |____component
| | | |____tabs
| | | | |____index.jsx
| | |____config
| | | |____index.js
| | |____util
| | | |____actionTypes.js
| | | |____http.js
| | | |____promiseMiddleware.js
| | | |____typeAction.js
| |____router
| | |____index.jsx
| |____store
| | |____reducer.js
| | |____user
| | | |____action.js
| | | |____reducer.js
| |____tpl.html
| |____view
| | |____home
| | | |____component
| | | | |____list
| | | | | |____index.jsx
| | | |____home.jsx
| | | |____home.less
| | | |____index.js
| | |____work
| | | |____index.js
| | | |____work.jsx
|____tsconfig.json
|____yarn.lock
````
 