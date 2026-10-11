/**
 * ELDORADO Design System Tokens
 * Matte black / charcoal / white / refined gold
 */

export const colors = {
  // Neutrals
  black: "#0a0a0a",
  charcoal: {
    950: "#0f0f0f",
    900: "#141414",
    800: "#1a1a1a",
    700: "#242424",
    600: "#2e2e2e",
    500: "#3d3d3d",
    400: "#525252",
    300: "#737373",
    200: "#a3a3a3",
    100: "#d4d4d4",
    50: "#f5f5f5",
  },
  white: "#ffffff",

  // Brand gold
  gold: {
    500: "#c9a227",
    400: "#d4af37",
    300: "#e0c35a",
    600: "#a68620",
    700: "#846b1a",
  },

  // Semantic
  success: "#22c55e",
  warning: "#f59e0b",
  danger: "#ef4444",
  info: "#3b82f6",
} as const;

export const statusColors: Record<string, string> = {
  PLANNING: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  ACTIVE: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  ON_HOLD: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  COMPLETED: "bg-slate-500/15 text-slate-300 border-slate-500/30",
  CANCELLED: "bg-red-500/15 text-red-400 border-red-500/30",
  DRAFT: "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
  SUBMITTED: "bg-sky-500/15 text-sky-400 border-sky-500/30",
  PENDING_APPROVAL: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  APPROVED: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  REJECTED: "bg-red-500/15 text-red-400 border-red-500/30",
  ISSUED: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  PARTIALLY_ISSUED: "bg-violet-500/15 text-violet-400 border-violet-500/30",
};

export const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "LayoutDashboard" },
  { name: "Projects", href: "/projects", icon: "Building2" },
  { name: "Materials & Inventory", href: "/materials", icon: "Package" },
  { name: "Material Requests", href: "/material-requests", icon: "ClipboardList" },
  { name: "Procurement", href: "/procurement", icon: "ShoppingCart" },
  { name: "Employees", href: "/employees", icon: "Users" },
  { name: "Equipment", href: "/equipment", icon: "Wrench" },
  { name: "Expenses & Finance", href: "/expenses", icon: "Wallet" },
  { name: "Suppliers", href: "/suppliers", icon: "Truck" },
  { name: "Reports", href: "/reports", icon: "BarChart3" },
  { name: "Notifications", href: "/notifications", icon: "Bell" },
  { name: "Users & Permissions", href: "/users", icon: "Shield" },
  { name: "Settings", href: "/settings", icon: "Settings" },
] as const;
