import { DashboardBarChart } from '@/shared/ui/dashboard-bar-chart/DashboardBarChart.tsx';
import s from '@/widgets/dashboard/ui/Dashboard.module.css';
import { Spinner } from '@/shared/ui/spinner/Spinner.tsx';
import { useStatusData } from '@/widgets/dashboard/model/hooks/useStatusData.ts';

export const StatusDataWidget = () => {
  const { data, isLoading } = useStatusData();

  if (isLoading) return (<div className={s.chart}><Spinner /></div>);

  return (
    <DashboardBarChart data={data} dataKeyX={'date'} />
  );
};