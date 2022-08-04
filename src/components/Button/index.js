import './styles.css'

const Button = ({ children, ...rest}) => {
  return (
    <button {...rest} className='Button'>{children}</button>
  )
}

export default Button;
