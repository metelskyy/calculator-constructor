import { FC } from 'react'
import styles from './style.module.css'

interface CalculatorInputProps {
  data: { value: string; fontSize: number }
}

export const CalculatorInput: FC<CalculatorInputProps> = ({ data }) => {
  return (
    <div className={styles.calculatorInput} style={{ fontSize: data.fontSize }}>
      {data.value}
    </div>
  )
}
