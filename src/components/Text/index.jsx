import { classNames } from '@/lib/tools';

import style from './style.module.scss';

export default function Text({ children, as, className }) {
  const As = as || 'span';

  return <As className={classNames(style.text, className)}>{children}</As>;
}
