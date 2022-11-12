import Avatar from '../Avatar';
import Button from '../Button';
import style from './style.module.scss';

import IconBell from '@/assets/icons/bell.svg';
import IconSearch from '@/assets/icons/search.svg';

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.input}>
        <img src={IconSearch} />
        <input placeholder="Search" />
      </div>
      <div>
        <Button icon={IconBell} badge={9} />
        <Avatar src={'https://web.damirlut.online/pirate.gif'} />
      </div>
    </div>
  );
}
