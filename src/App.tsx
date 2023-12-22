import { useState } from 'react'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      顶级组件
      <Comp1></Comp1>
      <Comp2></Comp2>
    </div>
  )
}

export default App
