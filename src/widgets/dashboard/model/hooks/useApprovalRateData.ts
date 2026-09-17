import { useMedications } from '@/entities/medication/lib/useMedications.ts';
import { useMemo } from 'react';
import { selectApprovalRateByMonth } from '@/widgets/dashboard/lib/dashbord-data-selectors.ts';
import type { ApprovalRateDataItem, DashboardData } from '@/widgets/dashboard/model/types.ts';

export const useApprovalRateData = (): DashboardData<ApprovalRateDataItem> => {
  const { data, isLoading } = useMedications({ filters: {}, forCountOnly: true });

  const approvalRateData = useMemo(() => selectApprovalRateByMonth(data?.items || []), [data?.items]);

  return { data: approvalRateData, isLoading };
};
