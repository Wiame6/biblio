import CardModern from "./components/CardModern";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <span className="pill">Bibliothèque Universitaire • Accès réservé</span>
          <h1>Gérez et consultez le catalogue universitaire en toute simplicité</h1>
          <p>
            Une plateforme dédiée aux <strong>étudiants</strong>, <strong>professeurs</strong> et au
            <strong> responsable de la bibliothèque</strong> : emprunts, retours, suivi et disponibilité.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#catalogue">
              Explorer le catalogue
            </a>
            <a className="btn btn-outline" href="/about">
              En savoir plus
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-title">Fonctionnalités clés</div>
          <ul className="checklist">
            <li>Connexion uniquement pour membres de l’université</li>
            <li>Catalogue avec disponibilité en temps réel</li>
            <li>Emprunts, retours, historique</li>
            <li>Gestion centralisée par le responsable</li>
          </ul>
          <div className="hero-card-footer">
            <span className="dot" />
            Service Bibliothèque — Université
          </div>
        </div>
      </section>

      <section id="catalogue" className="section">
        <header className="section-head">
          <h2>Catalogue</h2>
          <p>Exemples d’ouvrages.</p>
        </header>

        <div className="books-grid">
          <CardModern
            id="1"
            imageUrl="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop"
            category="Informatique"
            status="available"
            title="Clean Code"
            subtitle="Robert C. Martin • Génie logiciel"
          />

          <CardModern
            id="2"
            imageUrl="https://images.unsplash.com/photo-1455885666463-3d4451c84f66?q=80&w=1400&auto=format&fit=crop"
            category="Mathématiques"
            status="borrowed"
            title="Analyse avancée"
            subtitle="Cours universitaire • Exercices"
          />

          <CardModern
            id="3"
            imageUrl="https://images.unsplash.com/photo-1524578271613-bd7c8c1b4b27?q=80&w=1400&auto=format&fit=crop"
            category="Économie"
            status="reserved"
            title="Microéconomie"
            subtitle="Principes & applications"
          />
        </div>
      </section>
    </main>
  );
}
