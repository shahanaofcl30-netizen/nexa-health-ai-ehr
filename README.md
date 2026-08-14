# nexa-health-ai-ehr

## Demo scaffold

This workspace contains a demo scaffold for Nexa Health AI — a React + Vite + Tailwind front-end with mock AI services and a Supabase client placeholder.

Completed in this phase:

- Project scaffold: `package.json`, `vite.config.js`, `index.html`.
- React app shell with routing: `src/main.jsx`, `src/App.jsx`.
- Tailwind CSS setup: `tailwind.config.cjs`, `postcss.config.cjs`, `src/index.css`.
- Reusable components: `Header`, `Sidebar`, `Card`.
- Pages: `Dashboard`, `Patients`, `Settings` with demo patient data and a sample Recharts chart.
- Mock AI service: `src/lib/mockAi.js`.
- Supabase client placeholder: `src/lib/supabaseClient.js` (reads env, no secrets committed).

Next steps:

- Install dependencies and run `npm run dev` to preview the app.
- Add authentication and real Supabase config (do not commit secrets).
- Implement more UI flows and connect mock AI to patient workflows.

Notes:

- Demo patient data only. No real PHI is used.
- Do not commit `.env` files or secrets.

## Stack

- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Lucide React (icons)
- Recharts (charts)
- Supabase (client placeholder)

## Folder structure

- `src/components` — reusable UI components
- `src/pages` — route pages
- `src/layouts` — layout components
- `src/services` — API and service wrappers
- `src/data` — demo data
- `src/hooks` — custom React hooks
- `src/utils` — utility helpers
- `src/assets` — static assets

## Setup

Install dependencies and run dev server:

```bash
npm install
npm run dev
```

Add a `.env.local` (not committed) with keys matching `.env.example` to enable Supabase.

## Modules created

- `src/components/Button.jsx`, `Badge.jsx`, `Input.jsx`
- `src/layouts/MainLayout.jsx`
- `src/services/apiClient.js`
- `src/lib/mockAi.js`, `src/lib/supabaseClient.js`

