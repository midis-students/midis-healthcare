import { classNames } from '@/lib/tools';
import Text from '../Text';
import style from './style.module.scss';

export default function Button({ children, icon, active, className, badge, ...props }) {
  return (
    <button
      className={classNames(style.button, className, active && style.button__active)}
      {...props}>
      <img src={icon} />
      {children ? <Text>{children}</Text> : null}
      {badge ? <Text className={style.badge}>{badge}</Text> : null}
    </button>
  );
}
