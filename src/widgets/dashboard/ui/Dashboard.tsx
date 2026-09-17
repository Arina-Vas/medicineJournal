import s from './Dashboard.module.css';
import { StatusDataWidget } from '@/widgets/dashboard/ui/StatusDataWidget/StatusDataWidget.tsx';
import { TestedPeopleWidget } from '@/widgets/dashboard/ui/TestedPeopleWidget/TestedPeopleWidget.tsx';
import { TestingProcessWidget } from '@/widgets/dashboard/ui/TestingProcessWidget/TestingProcessWidget.tsx';
import { DrugApprovalRateWidget } from '@/widgets/dashboard/ui/DrugApprovalRateWidget/DrugApprovalRateWidget.tsx';
import { TotalDataWidget } from '@/widgets/dashboard/ui/TotalDataWidget/TotalDataWidget.tsx';

export const Dashboard = () => {

  return (
    <div className={s.dashboardWrapper}>
      <h2 className={s.title}>Testing dashboard</h2>
      <div className={s.chartsWrapper}>
        <TotalDataWidget />

        <div className={s.charts}>
          <StatusDataWidget/>
          <TestedPeopleWidget/>
          <TestingProcessWidget/>
          <DrugApprovalRateWidget/>

        </div>
      </div>
    </div>
  );
};
