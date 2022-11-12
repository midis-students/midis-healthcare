import style from './style.module.scss';
export default function Avatar({ src }) {
  return <img src={src} className={style.avatar} />;
}
