import { CALCULATOR_EQUAL } from '../../../../constants'
import { CalculatorButton } from '../calculator-button/CalculatorButton'
import styles from './style.module.css'

export const Equal = () => {
  return (
    <div className={styles.equal}>
      <CalculatorButton
        variant='equal'
        value={CALCULATOR_EQUAL}
        onButtonClick={(e) => console.log(e)}
        title={CALCULATOR_EQUAL}
      />
    </div>
  )
}
