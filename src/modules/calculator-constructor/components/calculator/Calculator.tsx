import { useEffect, useRef, useState } from 'react'
import { CalculatorValue } from 'src/types/calculator'
import { CalculatorInput, Equal, Numbers, Operators } from './components'
import styles from './style.module.css'

export const Calculator = () => {
  const operationsHistory = useRef('0')
  const [currentValue, setcurrentValue] = useState<CalculatorValue>({ value: '0', fontSize: 36 })
  useEffect(() => {
    console.log(operationsHistory)
  }, [operationsHistory.current])
  return (
    <div className={styles.calculator}>
      <CalculatorInput data={currentValue} />
      <Operators history={operationsHistory} setValue={setcurrentValue} />
      <Numbers history={operationsHistory} data={currentValue} setValue={setcurrentValue} />
      <Equal history={operationsHistory} setValue={setcurrentValue} />
    </div>
  )
}
