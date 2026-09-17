import { DashboardLineChart } from '@/shared/ui/dashboard-line-chart/DashboardLineChart.tsx';
import { useTotalTests } from '@/widgets/dashboard/model/hooks/useTotalTests.ts';
import { Spinner } from '@/shared/ui/spinner/Spinner.tsx';
import s from '@/widgets/dashboard/ui/Dashboard.module.css';


export const TotalDataWidget = () => {
  const { data, isLoading } = useTotalTests();

  if (isLoading) return (<div className={s.totalData}><Spinner overlay={false} /></div>);

  return (
    <DashboardLineChart
      className={s.totalData}
      title="Total tested data"
      description={'Testing results received in all areas'}
      data={data}
      dataKeyX={'monthName'}
      dataKeyFirstLine={'current'}
      dataKeySecondLine={'previous'}
      grid
      dashed
    />
  );
};