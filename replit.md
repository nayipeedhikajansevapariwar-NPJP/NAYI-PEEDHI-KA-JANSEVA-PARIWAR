# NAYI PEEDHI KA JANSEVA PARIVAR (NPJP) - NGO Website

## Overview

NAYI PEEDHI KA JANSEVA PARIVAR (NPJP) is a community service organization website built to showcase the NGO's mission, programs, and impact in areas like education, healthcare, women empowerment, and rural development. The platform enables volunteers to register, supporters to donate, and visitors to learn about ongoing social welfare initiatives. The website features bilingual support (Hinglish - Hindi + English mix) to serve a diverse Indian audience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**UI Component System**: shadcn/ui component library built on Radix UI primitives, providing accessible and customizable components. The design follows a modern dark theme inspired by professional platforms (Vercel, GitHub) while incorporating NGO-specific trust elements.

**Styling Strategy**: Tailwind CSS with custom design tokens defined in CSS variables. The theme supports both light and dark modes with a neutral color palette (primary orange accent at 28° hue, 85% saturation). Typography uses Inter for body text and Poppins for headings, optimized for Hinglish readability with 1.7 line-height.

**Routing**: Wouter for client-side routing with pages for Home, About, Programs, Gallery, Contact, Volunteer registration, Donations, and Admin dashboard.

**State Management**: React Query (TanStack Query) for server state management with infinite stale time and disabled refetching by default. Local state handled through React hooks.

**Form Handling**: React Hook Form with Zod schema validation for type-safe form submissions on volunteer registration and contact forms.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js. The server handles both API routes and serves the built frontend in production.

**API Design**: RESTful API endpoints under `/api` namespace for volunteers, contacts, and admin authentication. Session-based authentication for admin routes using in-memory session storage with UUID tokens.

**Request Handling**: JSON body parsing with raw body preservation for webhook compatibility. Request logging middleware tracks method, path, status code, and duration for all API requests.

**Static File Serving**: Production builds serve the Vite-compiled frontend from the `dist/public` directory with SPA fallback routing.

**Development Setup**: Vite middleware integration in development mode with HMR (Hot Module Replacement) over dedicated `/vite-hmr` path. Custom error overlays and dev banners for Replit environment.

### Data Storage Solutions

**Current Implementation**: In-memory storage using Map data structures for volunteers and contacts. This is a temporary solution suitable for development and initial deployment.

**Intended Migration**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`. Migration files generated to `./migrations` directory. The application is structured to easily swap the in-memory storage with database-backed storage.

**Schema Design**: Type-safe schemas using Zod with Drizzle-Zod integration. Entities include Volunteers (name, email, phone, interest areas) and Contacts (name, email, phone, subject, message) with timestamps.

**Data Validation**: Zod schemas exported from shared schema file ensure consistent validation across frontend forms and backend API endpoints.

### Authentication and Authorization

**Admin System**: Simple session-based authentication with hardcoded credentials (username: "admin", password: "admin123") for demonstration purposes. Production deployment should replace with proper user management.

**Session Management**: UUID-based session tokens stored in-memory Map with expiration timestamps. Bearer token authentication via Authorization header for protected admin routes.

**Protected Routes**: Middleware function `isAuthenticated` validates session tokens and expiration before allowing access to admin endpoints (volunteer/contact data retrieval).

**Frontend Auth State**: Token stored in localStorage with helper functions for login/logout operations. Admin dashboard checks authentication status and redirects unauthorized users.

### External Dependencies

**UI Framework**: Radix UI primitives (@radix-ui/*) for accessible component foundations including dialogs, dropdowns, forms, navigation, popovers, and tooltips.

**Styling**: 
- Tailwind CSS for utility-first styling
- PostCSS with Autoprefixer for CSS processing
- class-variance-authority for component variant management
- clsx and tailwind-merge for conditional class composition

**Forms and Validation**:
- React Hook Form for form state management
- Zod for runtime type validation
- @hookform/resolvers for Zod integration

**Data Fetching**: TanStack React Query for server state management with optimistic updates and cache management.

**Date Handling**: date-fns for date formatting and manipulation.

**Build Tools**:
- Vite for frontend bundling and development server
- esbuild for server-side bundling with selective dependency bundling
- TypeScript compiler for type checking

**Database** (configured but not active):
- Drizzle ORM for type-safe database queries
- PostgreSQL driver (pg) for database connection
- connect-pg-simple for PostgreSQL session storage (when activated)

**Development Tooling**:
- @replit/vite-plugin-runtime-error-modal for error overlays
- @replit/vite-plugin-cartographer for code navigation
- @replit/vite-plugin-dev-banner for development indicators

**Asset Management**: Custom Vite alias (@assets) pointing to attached_assets directory for images. Generated images include NGO activities (health camps, education programs, women empowerment workshops, environmental initiatives).