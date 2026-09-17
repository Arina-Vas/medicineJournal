import type { AllMedications, Medication, MedicationFilters } from '@/entities/medication/model/type.ts';
import { collection, getDocs, getDoc, doc, query, QueryConstraint, getCountFromServer } from 'firebase/firestore';
import { db } from '@/shared/api/firebase.ts';
import { buildMedicationConstraints } from '@/entities/medication/api/buildConstraints.ts';
import type { Location } from '@/entities/location/model/type.ts';
import { toast } from 'react-toastify';

export const medicationsApi = {
  getAllMedications: async ({
    filters,
    forCountOnly = false,
  }: {
    filters: MedicationFilters;
    forCountOnly?: boolean;
  }): Promise<AllMedications> => {
    const docRef = collection(db, 'medications');

    const constraints: QueryConstraint[] = buildMedicationConstraints({ filters, forCountOnly });

    const q = query(docRef, ...constraints);
    const snapshot = await getDocs(q);
    const locationSnapshot = await getDocs(collection(db, 'locations'));

    const docs = snapshot.docs;
    const locations = locationSnapshot.docs;

    const items = docs.map(doc => ({
      id: doc.id,
      location: locations.find(l => l.id === doc.data().locationId)?.data() as Location,
      ...(doc.data() as Omit<Medication, 'id'>),
    }));

    return {
      items,
      firstVisibleDoc: docs[0] || null,
      lastVisibleDoc: docs[docs.length - 1] || null,
    };
  },
  getMedicationsCount: async (filters: MedicationFilters): Promise<number> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { pageSize, cursorDoc, ...necessaryFilters } = filters;
    const docRef = collection(db, 'medications');

    const constraints: QueryConstraint[] = buildMedicationConstraints({
      filters: necessaryFilters,
      forCountOnly: true,
    });
    const q = query(docRef, ...constraints);
    const snapshot = await getCountFromServer(q);

    return snapshot.data().count;
  },
  getMedicationById: async (id: string): Promise<Medication> => {
    const docRef = doc(db, 'medications', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      const error = `Medication with id "${id}" not found`
      toast(error);
      throw new Error(error);

    }

    return {
      id: docSnap.id,
      ...(docSnap.data() as Omit<Medication, 'id'>),
    };
  },
};
