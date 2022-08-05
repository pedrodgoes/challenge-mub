import styles from './styles.module.css'

const Button = ({ children, ...rest}) => {
  return (
    <button {...rest} className={styles.Button}>
      {children}
    </button>
  );
}

export default Button;
