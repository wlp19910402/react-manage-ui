import { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from '@/router/index.tsx'
import { message } from 'antd'

// 首页
function ToHome() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/home')
    message.warning('您已经登录过了')
  }, [])
  return <div></div>
}
// 登录
function ToLogin() {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/login')
    message.warning('您还没有登录请先登录')
  }, [])
  return <div></div>
}
function BeforeRouterEnter() {
  const outlet = useRoutes(router)
  const location = useLocation()
  /**
   * 后台管理系统两种经典跳转情况：
   * 1、如果访问的是登录页面，并且有token，跳转到首页
   * 2、如果访问的不是登录页面，并且没有token，跳转到登录页
   * 3、其余的都可以正常放行
   */
  // 1、访问登录页，有token
  let token = localStorage.getItem('auth-token')
  if (location.pathname === '/login' && token) {
    // 这里不能直接用useNavigate来实现跳转，因为需要BeforeRouterEnter是一个正常的JSX组件
    return <ToHome />
  }
  // 2、如果访问的不是登录页面，并且没有token，跳转到登录页
  if (location.pathname !== '/login' && !token) {
    // 这里不能直接用useNavigate来实现跳转，因为需要BeforeRouterEnter是一个正常的JSX组件
    return <ToLogin />
  }
  return <>{outlet}</>
}

function App() {
  return (
    <Provider store={store}>
      <BeforeRouterEnter></BeforeRouterEnter>
    </Provider>
  )
}

export default App
