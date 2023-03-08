import { ButtonPropsType } from '../models/buttonModel';
import classnames from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}: ButtonPropsType) {
  const count: number =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!success) +
    Number(!!warning) +
    Number(!!danger);

  try {
    if (count > 1) {
      throw new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  } catch (error: any) {
    console.log('ERROR: ', error.message);
  }

  const classes = classnames(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500 hover:text-white hover:bg-blue-600 active:bg-blue-800 focus:outline-none':
        primary,
      'bg-blue-500 text-white': primary && !outline,
      'border-gray-900 hover:text-white hover:bg-gray-600  active:bg-gray-800 focus:outline-none':
        secondary,
      'bg-gray-900 text-white': secondary && !outline,
      'border-green-500 hover:text-white hover:bg-green-600  active:bg-green-800 focus:outline-none':
        success,
      'bg-green-500 text-white': success && !outline,
      'border-yellow-400 hover:text-white hover:bg-yellow-600  active:bg-yellow-800 focus:outline-none':
        warning,
      'bg-yellow-400 text-white': warning && !outline,
      'border-red-500 hover:text-white hover:bg-red-600  active:bg-red-800 focus:outline-none':
        danger,
      'bg-red-500 text-white': danger && !outline,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
