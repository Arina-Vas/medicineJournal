import { useMedications } from '@/entities/medication/lib/useMedications.ts';
import s from './MedicationTags.module.css';
import { NavButton } from '@/shared/ui/nav-button/NavButton.tsx';

type Props = {
  locationId: string;
};
export const MedicationTags = ({ locationId }: Props) => {
  const { data: medications } = useMedications({ filters: { locationId, pageSize: 6 } });

  return (
    <ul className={s.tagList}>
      {medications?.items.map(medication => (
        <li key={medication.id}>
          <NavButton title={medication.name} className={s.tag} link={`/products/${medication.id}`} />
        </li>
      ))}
    </ul>
  );
};
