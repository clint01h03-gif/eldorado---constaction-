# ELDORADO Construction ERP

Production-oriented Construction Project Management, Material Inventory, Workforce, Equipment, Procurement, and Financial Tracking system for **ELDORADO Construction Company**.

**Default settings**
- Currency: Sri Lankan Rupees (LKR)
- Timezone: Asia/Colombo
- Date format: DD/MM/YYYY
- Language: English

## Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS
- **Backend**: Next.js Server Actions / API Routes + Zod validation
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: Role-based access control (to be integrated with NextAuth / Supabase Auth / custom)
- **UI**: Custom design system (matte black / charcoal / gold)

## Project Status

This is the **Phase 1 Foundation** package:

- Complete Prisma schema covering core domain (Users, Roles, Projects, Materials, Stock Ledger, Material Requests, Procurement, Employees, Equipment, Expenses, Audit)
- Design system tokens and layout shell
- Project structure ready for module implementation
- Seed-ready schema with proper constraints and indexes

**Not yet included** (to be built in subsequent phases):
- Full authentication UI and session management
- Complete CRUD for every module
- Stock calculation services with concurrency safety
- Approval workflow engines
- Reports and PDF/Excel export
- Production deployment configuration

## Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL 15+ (local or managed e.g. Supabase, Neon, Railway)
- npm or pnpm

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# Edit .env and set DATABASE_URL

# 3. Generate Prisma client and push schema
npm run db:generate
npm run db:push
# or for migrations: npm run db:migrate

# 4. (Optional) Seed demo data
npm run db:seed

# 5. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:push` | Push schema changes (dev) |
| `npm run db:migrate` | Create & apply migrations |
| `npm run db:seed` | Seed demonstration data |

## Design System

**Palette**
- Background: Matte black / charcoal (`#0f0f0f`, `#1a1a1a`, `#2a2a2a`)
- Text: White / light gray
- Accent: Refined gold (`#c9a227`, `#d4af37`)
- Status: Semantic greens, ambers, reds

**Navigation (planned)**
1. Dashboard
2. Projects
3. Materials & Inventory
4. Material Requests
5. Procurement & Receiving
6. Employees & Attendance
7. Equipment & Resources
8. Expenses & Finance
9. Suppliers & Subcontractors
10. Reports
11. Notifications
12. Users & Permissions
13. Settings

## Database Schema Highlights

- **Stock Ledger** is the source of truth (`stock_transactions` + `stock_transaction_lines`)
- Physical available stock and reserved stock tracked separately
- Material Request workflow with full status machine
- Approval history stored for auditability
- Soft deletes on key business entities
- AuditLog for sensitive actions

See `prisma/schema.prisma` for the full model.

## Implementation Phases (Reference)

1. **Foundation** (this package) – Schema, design system, project shell
2. **Projects + Inventory** – Project CRUD, material master, stock ledger, balances
3. **Requests + Procurement** – Material requests, approvals, PO, GRN
4. **Employees + Equipment** – Workforce, attendance, equipment assignments
5. **Finance + Reporting** – Expenses, budgets, reports, exports
6. **Testing + Production** – Permissions testing, concurrency tests, deployment

## Security Notes

- Never commit `.env` or secrets
- All authorization must be enforced server-side
- Stock movements and financial approvals require database transactions
- Sensitive data (payroll, approvals) restricted by role + project scope

## License

Proprietary – ELDORADO Construction Company. All rights reserved.

---

Built as a foundation for a real production ERP. Extend module by module following the original specification.
