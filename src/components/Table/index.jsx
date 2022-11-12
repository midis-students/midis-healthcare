import Div from '@/components/Div';
import Text from '@/components/Text';
import Avatar from '@/components/Avatar';
import Button from '@/components/Button';

import IconEdit from '@/assets/icons/edit.svg';
import IconDelete from '@/assets/icons/delete.svg';

import style from './style.module.scss';

export default function Table({ title, data }) {
  const header = ['Name', 'Email', 'Date', 'Visit Time', 'Doctor', 'Condition'];

  return (
    <Div className={style.table}>
      <Text as="h1">{title}</Text>
      <table>
        <thead className={style.thead}>
          <tr>
            {header.map((head) => (
              <td key={head}>
                <Text>{head}</Text>
              </td>
            ))}
          </tr>
          <tr />
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.Name}>
              <td className={style.name}>
                <Avatar src={user.Avatar} />
                <Text>{user.Name}</Text>
              </td>
              {header.map((head, i) =>
                i > 0 ? (
                  <td key={user.Name + head}>
                    <Text>{user[head]}</Text>
                  </td>
                ) : null,
              )}
              <td className={style.td__buttons}>
                <Button icon={IconEdit} />
                <Button icon={IconDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Div>
  );
}
