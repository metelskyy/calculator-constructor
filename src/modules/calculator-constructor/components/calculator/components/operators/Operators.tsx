import { CALCULATOR_OPERATORS } from '../../../../constants'
import { CalculatorButton } from '../calculator-button/CalculatorButton'
import styles from './style.module.css'

export const Operators = () => {
  return (
    <div className={styles.operators}>
      {CALCULATOR_OPERATORS.map((item) => {
        return (
          <CalculatorButton
            key={item.value}
            variant='operator'
            value={item.value}
            onButtonClick={(e) => console.log(e)}
            title={item.label}
          />
        )
      })}
    </div>
  )
}
