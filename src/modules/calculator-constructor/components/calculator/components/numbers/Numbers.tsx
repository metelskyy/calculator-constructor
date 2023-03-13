import { CALCULATOR_NUMBERS } from '../../../../constants'
import { CalculatorButton } from '../calculator-button/CalculatorButton'
import styles from './style.module.css'

export const Numbers = () => {
  return (
    <div className={styles.numbers}>
      {CALCULATOR_NUMBERS.map((item) => {
        return (
          <CalculatorButton
            key={item}
            variant={item === '0' ? 'zero' : 'standart'}
            value={item}
            onButtonClick={(e) => console.log(e)}
            title={item}
          />
        )
      })}
    </div>
  )
}
