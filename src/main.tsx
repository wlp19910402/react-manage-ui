import React from 'react'
import ReactDOM from 'react-dom/client'
// 正确的样式引入顺序
// 初始化样式放在最前面
import 'reset-css'
// ui框架的样式
// 全局样式
import '@/assets/styles/global.scss'
// 组件的样式

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
