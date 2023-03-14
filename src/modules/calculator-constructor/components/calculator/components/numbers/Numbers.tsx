import { FC, MutableRefObject } from 'react'
import { CalculatorValue } from 'src/types/calculator'
import { CALCULATOR_NUMBERS } from '../../../../constants'
import { CalculatorButton } from '../calculator-button/CalculatorButton'
import styles from './style.module.css'

interface NumbersProps {
  setValue: React.Dispatch<React.SetStateAction<CalculatorValue>>
  history: MutableRefObject<string>
  data: CalculatorValue
}

export const Numbers: FC<NumbersProps> = ({ setValue, history, data }) => {
  const onClickHandler = (item: string) => {
    setValue((currentValue) => {
      if (currentValue.value.length >= 9) return { ...currentValue }
      if (item === '.' && currentValue.value.includes('.')) return currentValue
      if (currentValue.value === '0' && item !== '.') return { ...currentValue, value: item }
      return { ...currentValue, value: currentValue.value + item }
    })

    if (history.current === '0' && item !== '.') {
      history.current = item
      return
    }
    if (item === '.' && data.value.includes('.')) return
    if (data.value.length >= 9) return

    history.current = history.current + item
  }

  return (
    <div className={styles.numbers}>
      {CALCULATOR_NUMBERS.map((item) => {
        return (
          <CalculatorButton
            key={item}
            variant={item === '0' ? 'zero' : 'standart'}
            value={item}
            onButtonClick={(e) => {
              console.log(e)
              onClickHandler(item)
            }}
            title={item}
          />
        )
      })}
    </div>
  )
}
