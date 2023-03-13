import { FC } from 'react'
import styles from './style.module.css'

interface CalculatorInputProps {
  data: string
}

export const CalculatorInput: FC<CalculatorInputProps> = ({ data }) => {
  return <div className={styles.calculatorInput}>{data}</div>
}
