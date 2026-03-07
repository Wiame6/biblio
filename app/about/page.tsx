export default function AboutPage() {
  return (
    <main className="container">
      <section className="paper">
        <h1 className="pageTitle">À propos de BiblioUni</h1>
        <p className="pageLead">
          BiblioUni est une bibliothèque universitaire numérique conçue pour faciliter l’accès
          aux ressources académiques et la gestion des emprunts.
        </p>

        <div className="split">
          <div>
            <h2 className="h2">Accès réservé</h2>
            <p className="p">
              La connexion est strictement réservée aux <strong>étudiants</strong> et
              <strong> professeurs</strong> appartenant à l’université. Les utilisateurs externes
              ne peuvent pas accéder au système.
            </p>

            <h2 className="h2">Emprunts</h2>
            <p className="p">
              Les membres autorisés peuvent emprunter des livres selon la disponibilité,
              consulter l’historique et suivre les dates de retour.
            </p>
          </div>

          <div className="infoCard">
            <div className="infoCard__title">Rôle du responsable</div>
            <ul className="list">
              <li>Gestion du catalogue (ajout, mise à jour, suppression)</li>
              <li>Gestion des membres (étudiants, professeurs)</li>
              <li>Suivi des emprunts, retours, retards</li>
              <li>Contrôle de la disponibilité des ouvrages</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}