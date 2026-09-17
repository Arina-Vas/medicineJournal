import { useQuery } from '@tanstack/react-query';
import { locationApi } from '@/entities/location/api/locationApi.ts';

export const useGetMedicationLocations = () => {
  return useQuery({
    queryKey: ['locations'],
    queryFn: locationApi.getLocations,
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetMedicationLocationById = (id: string) => {
  return useQuery({
    queryKey: ['locations', id],
    queryFn: () => locationApi.getLocationById(id),
    enabled: Boolean(id && typeof id === 'string' && id.trim() !== ''),
  });
};
