import cn from 'classnames';
import React, { FC } from 'react';
import styles from './button.module.scss';

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'accent';
  fullWidth?: boolean;
  large?: boolean;
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  variant,
  fullWidth,
  large,
  type = 'button',
  disabled = false,
  ...restProps
}) => {
  const classes = cn(
    styles.root,
    { [styles[variant]]: variant },
    { [styles.fullWidth]: fullWidth },
    { [styles.large]: large },
    { [styles.disabled]: disabled },
    className,
  );

  return (
    <button className={classes} type={type} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};
