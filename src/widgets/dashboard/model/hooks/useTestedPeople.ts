import { useMedications } from '@/entities/medication/lib/useMedications.ts';
import { useMemo } from 'react';
import {
  selectTestedPeopleLastYear,
} from '@/widgets/dashboard/lib/dashbord-data-selectors.ts';
import type { DashboardData, TestedPeopleDataItem } from '@/widgets/dashboard/model/types.ts';


export const useTestedPeople = (): DashboardData<TestedPeopleDataItem> => {
  const { data, isLoading } = useMedications({ filters: {}, forCountOnly: true });

  const testedPeopleData = useMemo(() => selectTestedPeopleLastYear(data?.items || []), [data?.items]);

  return { data: testedPeopleData, isLoading };
};