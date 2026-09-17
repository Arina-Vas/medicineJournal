import { useMedications } from '@/entities/medication/lib/useMedications.ts';
import { useMemo } from 'react';
import { selectTestingProcessByPhase } from '@/widgets/dashboard/lib/dashbord-data-selectors.ts';
import type { DashboardData, TestingProcessDataItem } from '@/widgets/dashboard/model/types.ts';

export const useTestingProcess = (): DashboardData<TestingProcessDataItem> => {
  const { data, isLoading } = useMedications({ filters: {}, forCountOnly: true });

  const testingProcessData = useMemo(() => {
    return selectTestingProcessByPhase(data?.items || []);
  }, [data?.items]);

  return { data: testingProcessData, isLoading };
};
