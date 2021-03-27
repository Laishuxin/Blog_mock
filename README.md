# Blog_mock
  由于自己写的[博客](https://github.com/Laishuxin/Blog)后端尚未开发完成，但是[api](https://github.com/Laishuxin/Blog/blob/main/doc/api_doc/api_doc.md)已经提前写好了，为了能提前写博客前端，于是有了该项目。

  该项目主要是为自己写的博客提供API。由于在设计API时存在缺陷，所以该项目并没有完全实现与[API文档](https://github.com/Laishuxin/Blog/blob/main/doc/api_doc/api_doc.md)。或者说，该项目对设计的API做了优化。

## 写在前面
1. 使用`typescript`进行开发。
   出于一下理由采用`ts`进行开发：
   + 与API文档直接挂钩。之前在写API文档时就采用文本+`ts`编写的。所以可以直接使用原先写好的`ts`代码。
   + 更好的提示。使用`ts`开发很大程度处于该目的，而使用`js`开发经常出现不知所措的错误，不可忍受( ╯□╰ )。
   + 作为`ts`的最佳实践。practices make perfect.

2. 采用`typescript compiler`进行编译。
   项目并没有采用`webpack`去构建出于一下原因：
    + 本人对`webpack`了解还很肤浅（逃~~），为了让博客项目快速交付，随弃之。
    + `tsc`提供的编译已经组够支持简单的测试。

3. 项目采用单分支结构。
   理由也很简单：为了快速交付( ╯□╰ )。

4. 复用。
   在不影响API正确交付的前提下，对API中的某些字段采用了缓存机制，所以有一部分响应得到的结果不尽相同。常用于做缓存的字段有：
   + `url`
   + `image`
   + `email`
   + ...
5. 耦合性。
   项目尽可能地解除模块与模块之间的耦合性，所以某些部分虽然可以简单地调用原方法，但还是进行封装。
6. 英文注释。
   因为在开发的时候用的`vscode` + `nvim`，在使用中英文切换时很是不方便，而且经常出现在输入中文后忘记切换成英文而出现`nvim`识别异常，所以采用的英文注释。由于英语水平有限，可能存在一些语法错误，还请多多包涵。
## 目录结构
下面简单地介绍项目的目录结构，（可能与实际开发有出入，具体请看代码实现）： 
```powershell
src
│  app.ts # 入口文件
│
├─config  #存放配置文件
│      app_config.ts  # app的配置文件，例如：app的端口等
│      mock_config.ts # mock的配置文件，例如：配置mock中生成article的规则
│
├─middlewares         # koa中间件
│      index.ts
│
├─mock                # mock主文件夹
│      xxx.ts         # 用于生成api字段。例如：article.ts 用于生成article字段
│
├─routes
│      index.ts
│
├─typings # typescript 声明文件，与api文档直接挂钩。位置好像放错了( ╯□╰ )。将错就错
│  ├─api
│  └─Models
│
└─utils   # 工具类文件
        xxx_utils.ts  # 提供xxx工具支持
```

## usage
### dev
```bash
yarn dev
# or 
npm run dev
```
### build
```bash
yarn build
# or 
npm run build
```

### server
```bash
# run build before executing
yarn server 
# or
npm run server
```