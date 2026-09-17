import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { medicationsApi } from '../api/medicationsApi.ts';
import type { MedicationFilters } from '@/entities/medication/model/type.ts';

type useMedications = {
  filters: MedicationFilters;
  forCountOnly?: boolean;
};

export const useMedications = ({ filters, forCountOnly }: useMedications) => {
  return useQuery({
    queryKey: ['medications', filters],
    queryFn: () => medicationsApi.getAllMedications({ filters, forCountOnly }),
    placeholderData: keepPreviousData,
  });
};

export const useGetMedicationsCount = (filters: MedicationFilters) => {
  return useQuery({
    queryKey: ['medicationCount', filters],
    queryFn: () => medicationsApi.getMedicationsCount(filters),
  });
};

export const useGetMedicationById = (id: string) => {
  return useQuery({
    queryKey: ['medications', id],
    queryFn: () => medicationsApi.getMedicationById(id),
  });
};
