import { FC, useState } from 'react'
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
  const [color, setColor] = useState(variant !== 'equal' ? '#FFF' : '#5D5FEF')

  const checkVariant = () => {
    if (variant === 'operator') return styles.operator
    if (variant === 'zero') return styles.zero
    if (variant === 'equal') return styles.equal
    return styles.standart
  }

  return (
    <button
      onMouseDown={() => {
        if (variant !== 'equal') setColor('#5D5FEF')
        else setColor('#121370')
      }}
      onMouseUp={() => {
        if (variant !== 'equal') setColor('#FFF')
        else setColor('#5D5FEF')
      }}
      value={value}
      onClick={(event) => {
        event.preventDefault()
        onButtonClick(event)
      }}
      className={checkVariant()}
      style={{ backgroundColor: color }}
    >
      {title}
    </button>
  )
}
