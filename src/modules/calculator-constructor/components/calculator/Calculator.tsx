import { useState } from 'react'
import { CalculatorInput, Equal, Numbers, Operators } from './components'
import styles from './style.module.css'

export const Calculator = () => {
  const [data, setData] = useState('0')
  const [currentValue, setcurrentValue] = useState('0')
  return (
    <div className={styles.calculator}>
      <CalculatorInput data={currentValue} />
      <Operators />
      <Numbers />
      <Equal />
    </div>
  )
}
