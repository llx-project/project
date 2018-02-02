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
| |____config.js            #构建变量配置            
| |____server.js            #开发服务器                
| |____webpack.common.js    
| |____webpack.dev.js
| |____webpack.prd.js
|____src                    #开发目录
| |____app                  #应用容器
| |____common               #公共资源目录
| | |____api                #统一定义接口            
| | |____asset              #存放各种资源，如共用css、图片、字体文件等
| | |____component          #通用组件
| | |____config             #项目配置
| | |____util               #通用工具库
| |____router               #路由控制
| |____store                #store
| |____view                 #view页面层，目录结构与router配置有对应关系 
| | |____home               #首页模块
| | | |____component        #模块共用模块
| | | | |____list
| | | | | |____index.jsx
| | | | | |____index.less
| | | |____home             #对应页面
| | | | |____head.jsx       #页面所需的组件
| | | | |____index.jsx      #页面主体
| | | | |____index.less
| | | |____index.js         #模块入口文件
| |____app.jsx
| |____tpl.html
|____package.json
|____README.md
|____.babelrc
|____.gitignore
|____yarn.lock
````