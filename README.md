powershell -NoProfile -Command $Content = @'# GuardianDesk – Tourist Safety Monitoring Dashboard (UI Prototype)

[![React](https://img.shields.io/badge/React-18.3.x-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.x-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.x-38B2AC.svg)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Radix-000000.svg)](https://ui.shadcn.com/)

Note: This repository contains a UI prototype for GuardianDesk—the dashboard local authorities can use to monitor tourist safety. It represents design and navigation only. There is no backend, real-time data, or production hardening yet.

## GuardianDesk Prototype Features (UI Only)

- Government dashboard layout with top-level navigation and panels
- Region/overview cards and KPI widgets
- Charts and analytics (via Recharts) with sample/mock data
- Alerts feed and basic filtering UI
- Forms and inputs using shadcn/ui (Radix) components
- Dark mode theming with Tailwind CSS
- Responsive design across desktop and mobile
- Client-side routing (React Router)
- No authentication, persistence, or live integrations yet

This prototype demonstrates the look, feel, and navigation flow intended for the operational dashboard used by authorities.

## Future Scope

- Secure authentication and role-based access (Admin, Operator, Analyst)
- Real-time alerts and geo-context (integrations with field apps/sensors)
- Integrations with airport/hotel systems for check-in/ID verification
- AI-assisted anomaly detection and automated e-FIR drafting
- Incident reporting workflows and case management
- Persistent storage (DB) for incidents, alerts, user activity
- Multilingual assistant and accessibility improvements

## Getting Started

### Prerequisites

- Node.js 18+ (Vite 5 requires Node 18 or newer)
- npm 9+ (or a compatible package manager)
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/GuardianDesk.git
   cd GuardianDesk
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   Available at: http://localhost:8080/

### Available Scripts

- `npm run dev` — Start Vite dev server (port 8080 per `vite.config.ts`)
- `npm run build` — Production build
- `npm run build:dev` — Development-mode build
- `npm run preview` — Preview the production build
- `npm run lint` — Lint the project

## Built With

- React 18
- TypeScript 5
- Vite 5 (React SWC plugin)
- Tailwind CSS 3 (+ `tailwindcss-animate`)
- shadcn/ui (Radix UI primitives)
- React Router
- TanStack Query
- Recharts
- Zod, React Hook Form, Sonner, Lucide React
- ESLint

## 📂 Project Structure

```
GuardianDesk/
├── public/                     # Static assets served as-is
├── src/
│   ├── assets/                 # Images and other assets
│   ├── components/             # App components
│   │   └── ui/                 # shadcn/ui components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities/config
│   ├── pages/                  # Route-level pages
│   ├── App.css                 # App-level styles
│   ├── index.css               # Tailwind entry + design tokens
│   ├── App.tsx                 # Root app component
│   ├── main.tsx                # App entry point
│   └── vite-env.d.ts           # Vite/TS env types
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite config (port 8080)
├── tailwind.config.ts          # Tailwind theme/config
├── postcss.config.js           # PostCSS config
├── tsconfig.json               # TS base config
├── tsconfig.app.json           # TS app config
├── tsconfig.node.json          # TS Node config
├── eslint.config.js            # ESLint config
├── components.json             # shadcn/ui config
└── README.md                   # This file
```

## Notes for Development

- Tailwind is configured with class-based dark mode and extended design tokens in `tailwind.config.ts`.
- An alias `@` points to `./src` (see `vite.config.ts`).
- The app is currently wired with mock/sample data; replace with your service calls as you integrate a backend.

## Contact

- Maintainer: Sameer Shaikh
- Email: sameeritis10@gmail.com'@; Set-Content -Path 'd:\GuardianDesk\README.md' -Value $Content -Encoding UTF8
