export default function ContactPage() {
  return (
    <main className="container">
      <section className="paper">
        <h1 className="pageTitle">Contact</h1>
        <p className="pageLead">
          Pour toute question liée au catalogue, aux emprunts ou à l’accès, contactez le service bibliothèque.
        </p>

        <div className="split">
          <div className="infoCard">
            <div className="infoCard__title">Coordonnées</div>
            <p className="p">
              <strong>Bibliothèque Universitaire</strong><br />
              Campus Universitaire<br />
              Ville, Pays
            </p>
            <p className="p">
              <strong>Email :</strong> bibliouni@university.edu<br />
              <strong>Téléphone :</strong> +212 6 00 00 00 00
            </p>

            <div className="muted">
              Horaires : Lun–Ven 08:00–20:00 • Sam 09:00–16:00 • Dim fermé
            </div>
          </div>

          <form className="form">
            <div className="field">
              <label className="label">Nom</label>
              <input className="input" type="text" placeholder="Votre nom" />
            </div>

            <div className="field">
              <label className="label">Email</label>
              <input className="input" type="email" placeholder="Votre email" />
            </div>

            <div className="field">
              <label className="label">Message</label>
              <textarea className="textarea" placeholder="Écrivez votre message..." />
            </div>
            <br></br>
            <button className="btn btn--primary" type="button">
              Envoyer
            </button>

           
          </form>
        </div>
      </section>
    </main>
  );
}