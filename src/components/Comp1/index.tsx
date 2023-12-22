// import './comp1.module.scss' //全局引用
import styles from './comp1.module.scss' //模块化引用
function Comp() {
  return (
    <div className={styles.box}>
      <p>这是comp1里面的内容</p>
    </div>
  )
}

export default Comp
