import s from '@/widgets/dashboard/ui/Dashboard.module.css';
import { DashboardPieChart } from '@/shared/ui/dashboard-pie-chart/DashboardPieChart.tsx';
import { Spinner } from '@/shared/ui/spinner/Spinner.tsx';
import { useTestingProcess } from '@/widgets/dashboard/model/hooks/useTestingProcess.ts';

export const TestingProcessWidget = () => {
  const { data, isLoading } = useTestingProcess();

  if (isLoading) return (<div className={s.chart}><Spinner /></div>);

  return (
    <DashboardPieChart
      title="Testing process"
      className={s.chart}
      data={data}
    />
  );
};