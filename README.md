## llx项目体系
依赖于webpack、react、redux、react-router、axios技术栈

### 使用

````
npm start
````

### 目录结构
````
|____static                 #非模块化资源    
|____build                  #构建配置目录
| |____config.js            #构建变量配置            
| |____server.js            #开发服务器                
| |____webpack.common.js    
| |____webpack.dev.js
| |____webpack.prd.js
|____src                    #开发目录
| |____common               #公共资源目录
| | |____api                #统一定义接口            
| | |____asset              #存放各种资源，如共用css、图片、字体文件等
| | |____component          #通用组件
| | |____config             #项目配置
| | |____util               #通用工具库
| |____router               #路由控制
| |____store                #store
| |____view                 #view页面层，目录结构与router配置有对应关系 
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
| |____app.jsx
| |____tpl.html
|____package.json
|____README.md
|____.babelrc
|____.eslintrc
|____.gitignore
|____tsconfig.json
|____yarn.lock
````