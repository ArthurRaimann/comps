import { ButtonPropsType } from './models/buttonModel';
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

  const classes = classnames('flex items-center px-3 py-1.5 border', {
    'border-blue-500': primary,
    'bg-blue-500 text-white': primary && !outline,
    'border-gray-900 ': secondary,
    'bg-gray-900 text-white': secondary && !outline,
    'border-green-500 ': success,
    'bg-green-500 text-white': success && !outline,
    'border-yellow-400': warning,
    'bg-yellow-400 text-white': warning && !outline,
    'border-red-500 ': danger,
    'bg-red-500 text-white': danger && !outline,
    'rounded-full': rounded,
  });

  const classesOutline = classnames({
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  });

  return <button className={`${classes} ${classesOutline}`}>{children}</button>;
}

export default Button;
