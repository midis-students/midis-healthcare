import React from 'react';

import Div from '@/components/Div';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Separator from '@/components/Separator';

import { classNames } from '@/lib/tools';

import Logo from '@/assets/images/logo.svg';
import LogoMini from '@/assets/images/logo-small.svg';
import IconCircled from '@/assets/icons/navigation/circled.svg';
import IconCreditCard from '@/assets/icons/navigation/creditcard.svg';
import IconDisabled from '@/assets/icons/navigation/disabled.svg';
import IconDoctor from '@/assets/icons/navigation/doctor.svg';
import IconNurse from '@/assets/icons/navigation/nurse.svg';
import IconStethoscope from '@/assets/icons/navigation/stethoscope.svg';
import IconDashboard from '@/assets/icons/navigation/dashboard.svg';

import style from './style.module.scss';

const navs = [
  {
    title: 'Dashboard',
    icon: IconDashboard,
    active: true,
  },
  {
    title: 'Appointments',
    icon: IconStethoscope,
  },
  {
    title: 'Doctors',
    icon: IconNurse,
  },
  {
    title: 'Departments',
    icon: IconDoctor,
  },
  {
    title: 'Patients',
    icon: IconDisabled,
  },
  {
    title: 'Payments',
    icon: IconCreditCard,
  },
];

export default function Navigation() {
  const ref = React.useRef();
  const [collapse, setCollapse] = React.useState(false);

  const setWidth = (px) => {
    const main = document.getElementsByTagName('main')[0];
    main.style.marginLeft = ref.current.style.width = px;
  };

  const iconOnClick = () => {
    setCollapse(!collapse);
    setWidth(collapse ? '256px' : '86px');
  };

  React.useEffect(() => {
    setWidth('256px');
  }, []);

  return (
    <Div
      ref={ref}
      as="aside"
      className={classNames(style.navigation, collapse && style.navigation__collapse)}>
      <img className={style.logo} src={Logo} onClick={iconOnClick} />
      {collapse ? null : <Text as="h4">MEDICINE</Text>}
      <ul>
        {navs.map((nav) => (
          <li key={nav.title}>
            <Button
              icon={nav.icon}
              active={nav.active}
              onClick={() => (location.hash = '#' + nav.title)}>
              {!collapse && nav.title}
            </Button>
          </li>
        ))}
        <Separator />
        <Button icon={IconCircled} active={false}>
          {!collapse && 'Help'}
        </Button>
      </ul>
    </Div>
  );
}
