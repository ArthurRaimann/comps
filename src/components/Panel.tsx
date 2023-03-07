import classNames from 'classnames';
import { PanelType } from '../models/panelType';

function Panel({ children, className, ...rest }: PanelType) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
