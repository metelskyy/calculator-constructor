import { FC } from 'react'
import styles from './style.module.css'

interface CalculatorButtonProps {
  value: string
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  variant?: string
  title: string
}

export const CalculatorButton: FC<CalculatorButtonProps> = ({
  value,
  onButtonClick,
  variant = 'standart',
  title,
}) => {
  const checkVariant = () => {
    if (variant === 'operator') return styles.operator
    if (variant === 'zero') return styles.zero
    if (variant === 'equal') return styles.equal
    return styles.standart
  }

  return (
    <button
      value={value}
      onClick={(event) => {
        event.preventDefault()
        onButtonClick(event)
      }}
      className={checkVariant()}
    >
      {title}
    </button>
  )
}
