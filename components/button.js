import styles from './button.module.css';
import {grid} from '../styles/Home.module.css';
export default function Button({ children, href }) {
  return (
  <a className={styles.button} href={href}>
    {children}
  </a>

  );
}