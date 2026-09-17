import { useMemo } from 'react';
import { selectStatusByDate } from '@/widgets/dashboard/lib/dashbord-data-selectors.ts';
import { useMedications } from '@/entities/medication/lib/useMedications.ts';
import type { DashboardData, StatusDataItem } from '@/widgets/dashboard/model/types.ts';

export const useStatusData = (): DashboardData<StatusDataItem> => {
  const { data, isLoading } = useMedications({ filters: {}, forCountOnly: true });

  const statusData = useMemo(() => selectStatusByDate(data?.items || []), [data?.items]);

  return {
    data: statusData,
    isLoading,
  };
};
