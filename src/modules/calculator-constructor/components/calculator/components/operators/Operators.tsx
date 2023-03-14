import { FC, MutableRefObject } from 'react'
import { CalculatorValue } from 'src/types/calculator'
import { CALCULATOR_OPERATORS, OPERATORS_LIST } from '../../../../constants'
import { CalculatorButton } from '../calculator-button/CalculatorButton'
import styles from './style.module.css'

interface OperatorsProps {
  setValue: React.Dispatch<React.SetStateAction<CalculatorValue>>
  history: MutableRefObject<string>
}

export const Operators: FC<OperatorsProps> = ({ history, setValue }) => {
  return (
    <div className={styles.operators}>
      {CALCULATOR_OPERATORS.map((item) => {
        return (
          <CalculatorButton
            key={item.value}
            variant='operator'
            value={item.value}
            onButtonClick={() => {
              setValue({ value: '0', fontSize: 36 })

              if (OPERATORS_LIST.includes(history.current.at(-1) || '')) return

              history.current = history.current + item.value
            }}
            title={item.label}
          />
        )
      })}
    </div>
  )
}
