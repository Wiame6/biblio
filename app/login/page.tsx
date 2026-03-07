export default function LoginPage() {
  return (
    <main className="container">
      <section className="authWrap">
        <div className="authCard">
          <h1 className="authTitle">Connexion</h1>
          <p className="authSubtitle">
            Accès réservé aux étudiants et professeurs de l’université.
          </p>

          <form className="form">
            <div className="field">
              <label className="label">Email universitaire</label>
              <input className="input" type="email" placeholder="nom.prenom@univ.ma" />
            </div>

            <div className="field">
              <label className="label">Mot de passe</label>
              <input className="input" type="password" placeholder="••••••••" />
            </div>
             <br></br>
            <button className="btn btn--primary" type="button">
              Se connecter
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}