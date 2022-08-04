import './styles.css'

const Input = ({ label, ...rest}) => {
  return (
    <div className="InputWrapper">
      <span>{label}</span>
      <input {...rest}/>
    </div>
  )
}

export default Input;
