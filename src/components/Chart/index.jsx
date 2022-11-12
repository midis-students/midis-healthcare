import { classNames } from '@/lib/tools';
import style from './style.module.scss';
import Div from '@/components/Div';
import Text from '@/components/Text';
import LineComponent from '@/components/Line';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const colors = [
  {
    borderColor: '#336CFB',
    backgroundColor: '#FFFFFF',
  },
  {
    borderColor: '#FAC032',
    backgroundColor: '#FFFFFF',
  },
];

export default function Chart({
  values = { labels: ['1', '2', '3'], data: [{}] },
  settings = {},
  className,
}) {
  let data = {
    labels: values.labels,
    datasets: values.data.map((dataset, index) => {
      return {
        label: `Dataset ${Math.floor(Math.random() * 100)}`,
        data: values.labels.map(() => Math.floor(Math.random() * 100)),
        borderColor: colors[index].borderColor,
        backgroundColor: colors[index].backgroundColor,
        cubicInterpolationMode: 'monotone',
        ...dataset,
      };
    }),
  };

  let options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltips: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#CACCCF',
        },
        grid: {
          borderDash: [8, 3],
          color: '#A9C1FD',
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#CACCCF',
        },
        grid: {
          borderDash: [8, 3],
          color: '#D7DBDE',
        },
      },
    },
  };

  return (
    <Div className={classNames(style.chart, className)}>
      <div className={style.head}>
        <Text className={style.title}>{settings.title ? settings.title : 'Chart Name'}</Text>
        {settings.legend ? (
          <Text className={style.legendText}>{settings.legend}</Text>
        ) : (
          <div className={style.list}>
            {data.datasets.map(({ label, borderColor }) => {
              return (
                <div key={label} className={style.legend}>
                  <LineComponent color={borderColor} width="1.5em" />
                  <Text>{label}</Text>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={style.canvas}>
        <Line options={options} data={data} />
      </div>
    </Div>
  );
}
