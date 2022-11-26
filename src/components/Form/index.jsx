import React from 'react';
import Text from '@/components/Text';
import { classNames } from '@/lib/tools';
import style from './style.module.scss';

export function Form(props) {
  const { children, onSubmit, ...otherProps } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      if (Object.values(Form.values).some(({ valid }) => valid == false)) {
        alert('Еще не все заполнено');
      } else {
        const values = {};
        Object.entries(Form.values).forEach(([key, { value }]) => (values[key] = value));
        onSubmit(values);
      }
    }
    return false;
  };

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {props.children}
    </form>
  );
}
Form.values = {};

Form.Input = (props) => {
  const { as, defaultValue, validate, title, ...otherProps } = props;

  const [value, setValue] = React.useState(defaultValue || '');
  const [error, setError] = React.useState(null);
  const [touched, setTouched] = React.useState(false);

  const As = as || 'input';

  React.useEffect(() => {
    const valid = validate(value);
    Form.values[props.name] = { value, valid: false };
    if (valid === true) {
      Form.values[props.name].valid = true;
      setError(null);
    } else {
      if (touched) {
        setError(valid);
      }
    }
  }, [value]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classNames(style['form-input'], props.className)}>
      <Text as="label">{title}</Text>
      <As value={value} onChange={onChange} onFocus={() => setTouched(true)} {...otherProps} />
      {error && (
        <Text as="h4" className={style['form-input__error']}>
          {error}
        </Text>
      )}
    </div>
  );
};

Form.Submit = (props) => {
  const { children, ...otherProps } = props;

  return (
    <button type="submit" {...otherProps}>
      {children}
    </button>
  );
};
