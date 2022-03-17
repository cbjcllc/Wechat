1. redux + connected-react-router + history
解决redux和react-router-dom的结合问题
2. src/components/chatroom/state.ts
抽离出多个文件的共有状态
3. 文件结构
  components：视图组件
  views：页面级组件并沟通redux的容器，以及该页面下的相关action、reducer等
  utils：
    api：请求相关工具函数
  routes：路由配置，耦合并调用views下的组件
  redux：总的redux配置
  middleware：预备redux中间件位置
  assets：静态资源，图标、图片等
4. ENOENT：Errot No Entry
没有该目录


