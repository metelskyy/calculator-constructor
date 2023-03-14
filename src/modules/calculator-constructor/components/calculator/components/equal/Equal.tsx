import { FC, MutableRefObject } from 'react'
import { CalculatorValue } from 'src/types/calculator'
import { CALCULATOR_EQUAL } from '../../../../constants'
import { CalculatorButton } from '../calculator-button/CalculatorButton'
import styles from './style.module.css'

interface EqualProps {
  setValue: React.Dispatch<React.SetStateAction<CalculatorValue>>
  history: MutableRefObject<string>
}

export const Equal: FC<EqualProps> = ({ history, setValue }) => {
  return (
    <div className={styles.equal}>
      <CalculatorButton
        variant='equal'
        value={CALCULATOR_EQUAL}
        onButtonClick={() => {
          try {
            const finalResult = String(eval(history.current))

            if (!Number.isFinite(Number(finalResult))) {
              setValue({ value: 'Не определено', fontSize: 24 })
              return
            }

            finalResult.length > 9
              ? setValue({ value: Number(finalResult).toFixed(1), fontSize: 19 })
              : setValue({ value: finalResult, fontSize: 36 })
          } catch (error) {
            console.log(error)
          }
        }}
        title={CALCULATOR_EQUAL}
      />
    </div>
  )
}
