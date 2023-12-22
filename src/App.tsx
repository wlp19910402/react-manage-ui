import { useState } from 'react'
// import Comp1 from './components/Comp1'
// import Comp2 from './components/Comp2'
// import { Button } from 'antd'
// import { UpCircleOutlined } from '@ant-design/icons'
import { Link, useRoutes } from 'react-router-dom'
import router from '@/router/index.tsx'
function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return <div>{outlet}</div>
}

export default App
