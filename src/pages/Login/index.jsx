import { Form } from '@/components/Form';
import Text from '@/components/Text';
import { usePage } from '../../store/page';
import MainPage from '../Main';

import style from './style.module.scss';

const values = [
  {
    name: 'email',
    title: 'Email',
    validate: (value) => {
      const match = value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
      if (!match) {
        return 'Email incorrect';
      }

      return true;
    },
  },
  {
    name: 'password',
    title: 'Password',
    type: 'password',
    validate: (value) => {
      if (value.length < 5) {
        return 'Email must be longer than 5 characters';
      }
      if (value.length > 16) {
        return 'Email must be less than 16 characters';
      }

      return true;
    },
  },
];

export default function Login() {
  const { setPage } = usePage();

  const onSubmit = (data) => {
    setPage(<MainPage />)
  };

  return (
    <div className={style.wrapper}>
      <div>
        <Text as="h1">Login</Text>
        <Form onSubmit={onSubmit} className={style.form}>
          {values.map((props) => (
            <Form.Input key={props.name} {...props} />
          ))}
          <Form.Submit className={style.form__submit}>Войти</Form.Submit>
        </Form>
      </div>
    </div>
  );
}
