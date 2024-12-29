import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  const baseStyles =
    'rounded focus:outline-none focus:ring transition ease-in-out duration-200';
  const variantStyles = {
    primary: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-300',
    secondary:
      'bg-gray-200 hover:bg-gray-300 text-gray-700 focus:ring-gray-300',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-300',
  };
  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  const disabledStyles =
    'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300';

  const classes = `${baseStyles} ${
    disabled ? disabledStyles : variantStyles[variant]
  } ${sizeStyles[size]}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;