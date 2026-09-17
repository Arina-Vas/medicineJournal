import { useMedications } from '@/entities/medication/lib/useMedications.ts';
import { useMemo } from 'react';
import { selectTotalTestsByMonth } from '@/widgets/dashboard/lib/dashbord-data-selectors.ts';
import type { DashboardData, TotalTestsDataItem } from '@/widgets/dashboard/model/types.ts';

export const useTotalTests = (): DashboardData<TotalTestsDataItem> => {
  const { data, isLoading } = useMedications({ filters: {}, forCountOnly: true });

  const totalTestsData = useMemo(() => {
    return selectTotalTestsByMonth(data?.items || []);
  }, [data?.items]);

  return { data: totalTestsData, isLoading };
};
