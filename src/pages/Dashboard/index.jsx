import Card from '@/components/Card';
import Header from '@/components/Header';
import Table from '@/components/Table';
import Chart from '@/components/Chart';

import style from './style.module.scss';

import IconBank from '@/assets/icons/cards/bank.svg';
import IconCrutch from '@/assets/icons/cards/crutch.svg';
import IconFirstAid from '@/assets/icons/cards/firstaid.svg';
import IconOperationTheater from '@/assets/icons/cards/operationtheater.svg';

import data from '../../data';

const cards = [
  {
    title: 'Appointments',
    value: 213,
    icon: IconFirstAid,
  },
  {
    title: 'New Patients',
    value: 104,
    icon: IconCrutch,
  },
  {
    title: 'Operations',
    value: 24,
    icon: IconOperationTheater,
  },
  {
    title: 'Hospital Earnings',
    value: '$ 12,174',
    icon: IconBank,
  },
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className={style.cards}>
        {cards.map((card) => (
          <Card {...card} key={card.title} />
        ))}
      </div>
      <Chart
        values={{
          labels: Array.from({ length: 12 }).map((e, index) => {
            return new Date().getFullYear() + '-' + index;
          }),
          data: [{}, {}],
        }}
        settings={{
          legend: false,
          title: 'Hospital Survey',
        }}
      />

      <div className={style.badcomedia}>
        <Chart
          values={{
            labels: [1, 8, 16, 24, 31].map((e) => e + ' July'),
            data: [{}],
          }}
          settings={{
            legend: 'Income in current month',
            title: '$ 100,000',
          }}
        />

        <Chart
          values={{
            labels: Array.from({ length: 7 }).map((e, index) => index + 25 + ' July'),
            data: [
              {
                borderColor: '#FAC032',
                backgroundColor: '#FFFFFF',
              },
            ],
          }}
          settings={{
            legend: 'Income in current week',
            title: '$ 25,000',
          }}
        />
      </div>
      <Table title="Appointment Activity" data={data} />
    </>
  );
}
