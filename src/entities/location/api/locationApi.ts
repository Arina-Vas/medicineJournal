import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { db } from '@/shared/api/firebase.ts';
import type { Location } from '@/entities/location/model/type.ts';

export const locationApi = {
  getLocations: async (): Promise<Location[]> => {
    const docRef = collection(db, 'locations');
    const snapshot = await getDocs(docRef);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Location, 'id'>),
    }));
  },

  getLocationById: async (id: string): Promise<Location> => {
    const docRef = doc(db, 'locations', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error(`Location with id "${id}" not found`);
    }
    return {
      id: docSnap.id,
      ...(docSnap.data() as Omit<Location, 'id'>),
    };
  },
};
