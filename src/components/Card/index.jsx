import Div from '../Div';
import Text from '../Text';

import style from './style.module.scss';

export default function Card({ title, icon, value }) {
  return (
    <Div className={style.card}>
      <img src={icon} />
      <div>
        <Text className={style.card__title}>{title}</Text>
        <Text className={style.card__body}>{value}</Text>
      </div>
    </Div>
  );
}
