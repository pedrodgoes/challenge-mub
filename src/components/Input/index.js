import styles from './styles.module.css'

const Input = ({ label, ...rest}) => {
  return (
    <div className={styles.InputWrapper}>
      <span>{label}</span>
      <input {...rest} />
    </div>
  );
}

export default Input;
