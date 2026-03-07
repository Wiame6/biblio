import Card from "../../components/admin/card";

const loans = [
  {
    id: "LN-001",
    member: "Sara El Amrani",
    book: "Clean Code",
    dueDate: "12/03/2026",
    status: "En cours",
  },
  {
    id: "LN-002",
    member: "Yassine B.",
    book: "Atlas d'Anatomie Humaine",
    dueDate: "10/03/2026",
    status: "En retard",
  },
  {
    id: "LN-003",
    member: "Meryem T.",
    book: "Économie Internationale",
    dueDate: "15/03/2026",
    status: "Réservé",
  },
  {
    id: "LN-004",
    member: "Omar K.",
    book: "Méthodes de Recherche Scientifique",
    dueDate: "18/03/2026",
    status: "En cours",
  },
];

export default function DashboardPage() {
  return (
    <section className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">
            Welcome back. Here’s an overview of your library.
          </p>
        </div>

        <div className="dashboard-actions">
          <button className="quick-btn quick-btn--primary">+ Add Book</button>
          <button className="quick-btn">+ Add Member</button>
        </div>
      </div>

      <div className="dashboard-cards">
        <Card
          title="Total Books"
          value="12,480"
          subtitle="Available in catalogue"
          icon="📚"
        />
        <Card
          title="Members"
          value="1,284"
          subtitle="Students & professors"
          icon="👥"
        />
        <Card
          title="Active Loans"
          value="326"
          subtitle="Books currently borrowed"
          icon="🔄"
        />
        <Card
          title="Overdue"
          value="28"
          subtitle="Loans past due date"
          icon="⚠️"
        />
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="panel-header">
            <h2>Recent Loans</h2>
            <span>Updated today</span>
          </div>

          <div className="table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Member</th>
                  <th>Book</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan) => (
                  <tr key={loan.id}>
                    <td>{loan.id}</td>
                    <td>{loan.member}</td>
                    <td>{loan.book}</td>
                    <td>{loan.dueDate}</td>
                    <td>
                      <span
                        className={
                          loan.status === "En retard"
                            ? "status-pill status-pill--danger"
                            : loan.status === "Réservé"
                            ? "status-pill status-pill--warning"
                            : "status-pill status-pill--success"
                        }
                      >
                        {loan.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-header">
            <h2>Quick Actions</h2>
          </div>

          <div className="quick-actions">
            <button className="action-box">📘 Add New Book</button>
            <button className="action-box">👤 Register Member</button>
            <button className="action-box">🔄 Create Loan</button>
            <button className="action-box">📥 Record Return</button>
            <button className="action-box">📊 View Reports</button>
            <button className="action-box">⚙️ Settings</button>
          </div>
        </div>
      </div>
    </section>
  );
}