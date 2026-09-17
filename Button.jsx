import clsx from 'clsx';
import styles from './Button.module.css';

export default function Button({
  children,
  version = 'default',
  size = 'medium',
  color = 'white',
  onClick,
  style,
  className,
}) {
  const classButton = clsx(
    styles.button,
    styles[version],
    styles[size],
    styles[color],
    className
  );

  return (
    <button onClick={onClick} className={classButton} style={style}>
      {children}
    </button>
  );
}
