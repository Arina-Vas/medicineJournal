import { useParams } from 'react-router';
import { Medication } from '@/widgets/medication-details/Medication.tsx';
import { MapProvider } from '@/app/providers/map-provider/MapProvider.tsx';

const MedicineCard = () => {
  const { id } = useParams();

  return (
    <MapProvider>
      <Medication id={id || ''} />
    </MapProvider>
  );
};

export default MedicineCard;