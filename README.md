# GuardianDesk – Tourist Safety Monitoring Dashboard (UI Prototype)

[![React](https://img.shields.io/badge/React-18.3.x-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.x-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.x-38B2AC.svg)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Radix-000000.svg)](https://ui.shadcn.com/)

Note: This repository contains a UI prototype for GuardianDesk—the dashboard local authorities can use to monitor tourist safety. It represents design and navigation only. There is no backend, real-time data, or production hardening yet.

UI Prototype Link: [https://guardiandesk.netlify.app/](https://guardiandesk.netlify.app/)

Video Explanation of Prototype: [https://www.loom.com/share/92d95c1f944f4014ac077067d97d549a?sid=99211865-82af-4c3c-993a-c42973a32704](https://www.loom.com/share/92d95c1f944f4014ac077067d97d549a?sid=99211865-82af-4c3c-993a-c42973a32704)

## GuardianDesk Prototype Features (UI Only)

- Government dashboard layout with top-level navigation and panels
- Charts and analytics (via Recharts) with sample/mock data
- Alerts feed and basic filtering UI
- Responsive design across desktop and mobile
- Client-side routing (React Router)
- No authentication, persistence, or live integrations yet

This prototype demonstrates the look, feel, and navigation flow intended for the operational dashboard used by authorities.

## Future Scope

- Secure authentication and role-based access (Admin, Operator, Analyst)
- Real-time alerts and geo-context (integrations with field apps/sensors)
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

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/GuardianDesk.git
   cd GuardianDesk
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:8080/`

## Built With

## Built With

- [React](https://reactjs.org/) – UI library for building modern interfaces  
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript  
- [Vite](https://vitejs.dev/) – Next-generation frontend build tool  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling  
- [shadcn/ui](https://ui.shadcn.com/) – Headless, accessible UI components  
- [React Router](https://reactrouter.com/) – Client-side routing  
- [TanStack Query](https://tanstack.com/query) – Data fetching and caching  
- [Recharts](https://recharts.org/) – Charting and analytics UI  
- [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/) – Form handling and validation  
- [Sonner](https://sonner.emilkowal.ski/) – Toast & notification system  
- [Lucide React](https://lucide.dev/) – Icon set for React apps  

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

