import { useAppSelector, useAppDispatch } from '@/store/hook'
import { decrement, increment, incrementByAmount } from '@/store/slice/counter'
import { Button, Space } from 'antd'

function About() {
  const dispatch = useAppDispatch()
  const counterValue = useAppSelector((state) => state.counter.value)
  return (
    <div>
      <p style={{ padding: '20px 0' }}>About</p>
      <Space size="large">
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <div>{counterValue}</div>
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>+5</Button>
      </Space>
    </div>
  )
}

export default About
