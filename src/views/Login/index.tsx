import styles from './login.module.scss'
import initLoginBg from './init.ts'
import { useEffect, useState } from 'react'
import { Button, Input, Space } from 'antd'
import './login.less'
const view = () => {
  useEffect(() => {
    initLoginBg()
    window.addEventListener('resize', initLoginBg)
    return () => {
      window.removeEventListener('resize', initLoginBg)
    }
  }, [])
  const [usernameVal, setUsernameVal] = useState('') //定义用户输入信息变量
  const [passwordVal, setPasswordVal] = useState('') //密码
  const [captchaImg, setCaptchaImg] = useState('') //验证码
  const captchaChange = (e: any) => {
    setCaptchaImg(e.target.value)
  }
  const getCaptchaImg = () => {}
  const passwordChange = (e: any) => {
    setPasswordVal(e.target.value)
  }
  const usernameChange = (e: any) => {
    //   获取用户输入的命名
    setUsernameVal(e.target.value)
  }
  const gotoLogin = () => {
    console.log(usernameVal, passwordVal, captchaImg)
  }
  return (
    <div className={styles.loginPage}>
      {/*存放背景 */}
      <canvas id="canvas" style={{ display: 'block' }}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox + ' loginbox'}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>前端&nbsp;·&nbsp;通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            {/* 验证码盒子 */}
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg" onClick={getCaptchaImg}>
                <img
                  height="38"
                  style={{ width: '70px' }}
                  src={captchaImg}
                  alt=""
                />
              </div>
            </div>
            <Button
              type="primary"
              className="loginBtn"
              block
              onClick={gotoLogin}
            >
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default view
