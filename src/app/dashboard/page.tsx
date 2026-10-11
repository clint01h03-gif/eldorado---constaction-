export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-charcoal-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-charcoal-400 mb-8">
          Role-specific overview · Phase 1 shell (connect database to populate)
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Active Projects", value: "—" },
            { label: "Stock Value (LKR)", value: "—" },
            { label: "Pending Approvals", value: "—" },
            { label: "Low Stock Items", value: "—" },
          ].map((card) => (
            <div key={card.label} className="eld-card p-5">
              <p className="text-xs uppercase tracking-wider text-charcoal-400 mb-1">
                {card.label}
              </p>
              <p className="text-2xl font-semibold text-gold-400">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="eld-card p-6">
          <h2 className="text-lg font-semibold mb-3 text-gold-400">Next Steps</h2>
          <ul className="space-y-2 text-sm text-charcoal-300 list-disc list-inside">
            <li>Configure <code className="text-gold-400">DATABASE_URL</code> in <code>.env</code></li>
            <li>Run <code className="text-gold-400">npm run db:push</code> to apply the Prisma schema</li>
            <li>Implement authentication and role guards</li>
            <li>Build Projects + Inventory modules (Phase 2)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
