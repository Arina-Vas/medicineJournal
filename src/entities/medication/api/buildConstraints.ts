import { documentId, limit, orderBy, QueryConstraint, startAfter, where } from 'firebase/firestore';
import type { MedicationFilters } from '@/entities/medication/model/type.ts';

interface buildConstraintsProps {
  filters: MedicationFilters;
  forCountOnly?: boolean;
}

export const buildMedicationConstraints = ({ filters, forCountOnly = false }: buildConstraintsProps) => {
  const {
    name,
    startDate,
    endDate,
    successReaction,
    cursorDoc = null,
    pageSize = 10,
    sortBy,
    sortDirection = 'asc',
    locationId = '',
  } = filters;
  const constraints: QueryConstraint[] = [];

  if (name && name.trim().length >= 3) {
    constraints.push(where('searchKeywords', 'array-contains', name.trim().toLowerCase()));
  }

  if (successReaction !== undefined) {
    constraints.push(where('successReaction', '==', successReaction));
  }

  if (locationId) {
    constraints.push(where('locationId', '==', locationId));
  }

  if (startDate) {
    const dayStart = `${startDate}T00:00:00.000Z`;
    const dayEnd = `${startDate}T23:59:59.999Z`;

    constraints.push(where('startDate', '>=', dayStart));
    constraints.push(where('startDate', '<=', dayEnd));
  }

  if (endDate) {
    const dayStart = `${endDate}T00:00:00.000Z`;
    const dayEnd = `${endDate}T23:59:59.999Z`;

    constraints.push(where('endDate', '>=', dayStart));
    constraints.push(where('endDate', '<=', dayEnd));
  }

  if (sortBy) {
    constraints.push(orderBy(sortBy, sortDirection));
  } else {
    constraints.push(orderBy(documentId()));
  }

  if (cursorDoc) {
    constraints.push(startAfter(cursorDoc));
  }

  if (!forCountOnly) {
    constraints.push(limit(pageSize));
  }

  return constraints;
};
