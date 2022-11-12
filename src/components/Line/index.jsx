import { classNames } from '@/lib/tools';

import style from './style.module.scss';

export default function Line({ color, width, className }) {
  const Color = color || 'black';
  const Width = width || '1px';

  return (
    <div
      className={classNames(style.line, className)}
      style={{
        backgroundColor: Color,
        width: Width,
      }}
    />
  );
}
