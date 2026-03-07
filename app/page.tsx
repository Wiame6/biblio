export default function Home() {

  const books = [
    {
      category: "INFORMATIQUE",
      title: "Intelligence Artificielle - Fondements",
      author: "S. Russell",
      desc: "Un incontournable pour comprendre les bases de l’IA moderne.",
    },
    {
      category: "MÉTHODOLOGIE",
      title: "Méthodes de Recherche Scientifique",
      author: "M. Grawitz",
      desc: "Guide pratique pour réussir les mémoires et thèses universitaires.",
    },
    {
      category: "ÉCONOMIE",
      title: "Économie Internationale",
      author: "P. Krugman",
      desc: "Référence claire sur les échanges mondiaux et politiques commerciales.",
    },
    {
      category: "MÉDECINE",
      title: "Atlas d’Anatomie Humaine",
      author: "F. Netter",
      desc: "Illustrations détaillées pour les étudiants en santé.",
    },
  ];

  return (
    <main className="container">

      {/* HERO */}
      <section className="hero">

        <div className="hero__tag">
          BIBLIOTHÈQUE UNIVERSITAIRE
        </div>

        <h1 className="hero__title">
          Découvrez des milliers de livres pour réussir votre parcours.
        </h1>

        <p className="hero__subtitle">
          BiblioUni vous donne accès à des ouvrages académiques,
          des manuels spécialisés et des ressources récentes
          pour toutes les filières.
        </p>

        <div className="hero__actions">
          <a className="btn btn--light" href="#popular">
            Voir la bibliothèque
          </a>

          <a className="btn btn--outline" href="/login">
            Se connecter
          </a>
        </div>

      </section>


      {/* LIVRES POPULAIRES */}

      <section id="popular" className="section">

        <div className="section__head">
          <h2 className="section__title">
            Livres populaires
          </h2>

          <span className="section__meta">
            Mise à jour hebdomadaire
          </span>
        </div>

        <div className="grid">

          {books.map((book) => (

            <article key={book.title} className="book">

              <div className="book__category">
                {book.category}
              </div>

              <h3 className="book__title">
                {book.title}
              </h3>

              <div className="book__author">
                {book.author}
              </div>

              <p className="book__desc">
                {book.desc}
              </p>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}
