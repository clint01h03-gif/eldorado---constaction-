# ELDORADO Database Schema Overview

## Core Domains

### Auth & RBAC
- `users`, `roles`, `permissions`, `user_roles`, `role_permissions`
- Roles: SUPER_ADMIN, DIRECTOR, PROJECT_MANAGER, SITE_ENGINEER, STOREKEEPER, PROCUREMENT, ACCOUNTANT, HR_MANAGER

### Projects
- `projects` (status, budget, dates, geo)
- `project_members`, `project_phases`, `milestones`

### Inventory
- `warehouses`, `warehouse_members`
- `material_categories`, `materials`
- `stock_balances` (on-hand + reserved per material/warehouse)
- `stock_transactions` + `stock_transaction_lines` (immutable ledger)

**Stock formula**  
Physical available = Opening + Receipts + Returns/In − Issues − Out − Losses  
Available to issue = Physical − Reserved

### Material Requests
- `material_requests` + `material_request_lines`
- Status machine: DRAFT → SUBMITTED → PENDING_APPROVAL → APPROVED → PARTIALLY_ISSUED / ISSUED → COMPLETED (or REJECTED / CANCELLED / PROCUREMENT_REQUIRED)
- `approvals` (polymorphic + linked)

### Procurement
- `suppliers`, `supplier_quotations`
- `purchase_orders` + `purchase_order_lines`
- `goods_receipts` + `goods_receipt_lines` (accepted qty only increases stock)

### Workforce
- `employees`, `attendance_records`, `leave_records`

### Equipment
- `equipment`, `equipment_assignments`, `maintenance_records`

### Finance
- `expense_records`, `supplier_invoices`, `payments`

### Cross-cutting
- `project_documents`, `notifications`, `audit_logs`

## Key Design Decisions
- Soft deletes (`deletedAt`) on important entities
- Decimal for all quantities and money (no floating point)
- Stock ledger is append-only; corrections via reversal / adjustment transactions
- Approval records keep full history
- Project scoping on most operational tables
