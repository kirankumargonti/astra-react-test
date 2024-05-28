import {FC, memo} from 'react'
import {ButtonWrapper} from './Button.style'

interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  buttonName: string
  type?: 'button' | 'submit' | 'reset'
}

const Button: FC<ButtonProps> = memo(
  ({onClick, disabled = false, buttonName = '', type = 'button'}) => {
    const handleClick = () => {
      if (onClick) {
        onClick()
      }
    }

    return (
      <ButtonWrapper onClick={handleClick} disabled={disabled} type={type}>
        {buttonName}
      </ButtonWrapper>
    )
  }
)

export default Button
