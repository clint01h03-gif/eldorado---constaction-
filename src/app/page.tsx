import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-charcoal-700 bg-charcoal-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-gold-500 flex items-center justify-center font-bold text-charcoal-950 text-sm">
              EL
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-charcoal-50">
                ELDORADO
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-gold-500 -mt-0.5">
                Construction ERP
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-charcoal-300">
            <span className="hover:text-gold-400 cursor-default">Dashboard</span>
            <span className="hover:text-gold-400 cursor-default">Projects</span>
            <span className="hover:text-gold-400 cursor-default">Inventory</span>
            <span className="hover:text-gold-400 cursor-default">Reports</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-xs text-charcoal-400 hidden sm:inline">
              Asia/Colombo · LKR
            </span>
            <div className="w-8 h-8 rounded-full bg-charcoal-700 border border-charcoal-500 flex items-center justify-center text-xs font-medium">
              AD
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-xs font-medium mb-6">
              Phase 1 Foundation Ready
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-charcoal-50 mb-4">
              ELDORADO Construction{" "}
              <span className="text-gold-400">ERP</span>
            </h2>
            <p className="text-lg text-charcoal-300 mb-8 leading-relaxed">
              Complete project management, material inventory with stock ledger,
              workforce, equipment, procurement, and financial tracking —
              built for real construction operations in Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="eld-btn-primary w-full sm:w-auto text-center"
              >
                Open Dashboard
              </Link>
              <span className="eld-btn-secondary w-full sm:w-auto text-center cursor-default">
                View Documentation
              </span>
            </div>
          </div>

          {/* Feature grid */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Projects",
                desc: "Full project lifecycle with budgets, phases, milestones, and team assignments.",
              },
              {
                title: "Stock Ledger",
                desc: "Immutable inventory transactions. Physical vs reserved stock. No silent negatives.",
              },
              {
                title: "Material Requests",
                desc: "Site → PM approval → Store issue workflow with full audit trail.",
              },
              {
                title: "Procurement",
                desc: "Requisitions, POs, GRNs, partial receipts, and supplier performance.",
              },
              {
                title: "Workforce & Equipment",
                desc: "Attendance, allocation, payroll prep, equipment utilization & maintenance.",
              },
              {
                title: "Finance & Reports",
                desc: "Committed vs actual costs, budget variance, and role-scoped exports.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="eld-card p-6 hover:border-gold-500/40 transition-colors"
              >
                <h3 className="text-gold-400 font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-charcoal-300 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-charcoal-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-charcoal-400">
          <p>© {new Date().getFullYear()} ELDORADO Construction Company</p>
          <p className="text-xs">
            Foundation package · Prisma schema + Design system ready
          </p>
        </div>
      </footer>
    </div>
  );
}
