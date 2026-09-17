# Medicine Journal

A web application for tracking clinical drug/vaccine trials: browsing and filtering medications
in a paginated table, viewing trial details on a map, and monitoring overall testing progress on
an analytics dashboard.

Deployment link: [Medicine Journal](https://arina-vas.github.io/medicineJournal)

## Features

- **Authentication** — email/password sign in and sign up (Firebase Auth).
- **Medications table** — paginated, sortable, filterable list of medications
  (search by name, filter by location, success/failure of reaction, date range).
- **Medication details** — trial info, clinic location shown on Google Maps with directions,
  and related medications tested at the same location.
- **Dashboard** — testing analytics: total tests over time, testing progress by phase,
  number of people tested, drug approval rates, and completed/awaiting status by date.

## Tech stack & dependencies

- **[React 19](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)** — UI and typing
- **[Vite](https://vite.dev/)** — build tool and dev server
- **[React Router](https://reactrouter.com/)** — client-side routing
- **[TanStack Query](https://tanstack.com/query/latest)** — server-state management and data fetching
- **[Firebase](https://firebase.google.com/)** (Firestore + Auth) — database and authentication
- **[@vis.gl/react-google-maps](https://visgl.github.io/react-google-maps/)** — Google Maps integration
- **[Recharts](https://recharts.org/)** — dashboard charts
- **[clsx](https://github.com/lukeed/clsx)** — conditional className helper
- **[vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)** — importing SVGs as React components
- **ESLint** + **typescript-eslint** — linting

The project follows a **Feature-Sliced Design (FSD)** architecture
(`app → pages → widgets → features → entities → shared`); see `FSD_MIGRATION_NOTES.md` for details.

## Prerequisites

- Node.js 18+ and npm
- A Firebase project with **Firestore** and **Authentication (Email/Password)** enabled
- A Google Maps API key with the **Maps JavaScript API** and a **Map ID** (for `AdvancedMarker`)

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Create a `.env.local` file in the project root:

   ```env
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_MAP_ID=your_google_maps_map_id
   ```

   Firebase config (project id, API key, etc.) is set up in `src/shared/api/firebase.ts`.

## Running the app

```bash
# Start the dev server (with HMR) at http://localhost:5173
npm run dev

# Type-check and create a production build in dist/
npm run build

# Preview the production build locally
npm run preview

# Run ESLint
npm run lint
```