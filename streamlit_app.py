import sqlite3
from datetime import date
import streamlit as st

DB_PATH = "bon_repas_chu_oujda.db"


def get_conn():
    return sqlite3.connect(DB_PATH, check_same_thread=False)


def init_db(conn):
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS beneficiaries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            service TEXT NOT NULL,
            matricule TEXT UNIQUE NOT NULL
        )
        """
    )
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS meal_vouchers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            beneficiary_id INTEGER NOT NULL,
            voucher_date TEXT NOT NULL,
            meal_type TEXT NOT NULL,
            amount REAL NOT NULL,
            status TEXT NOT NULL DEFAULT 'emis',
            notes TEXT,
            FOREIGN KEY (beneficiary_id) REFERENCES beneficiaries(id)
        )
        """
    )
    conn.commit()


def add_beneficiary(conn, full_name, service, matricule):
    conn.execute(
        "INSERT INTO beneficiaries(full_name, service, matricule) VALUES (?, ?, ?)",
        (full_name, service, matricule),
    )
    conn.commit()


def add_voucher(conn, beneficiary_id, voucher_date, meal_type, amount, notes):
    conn.execute(
        """
        INSERT INTO meal_vouchers(beneficiary_id, voucher_date, meal_type, amount, notes)
        VALUES (?, ?, ?, ?, ?)
        """,
        (beneficiary_id, str(voucher_date), meal_type, amount, notes),
    )
    conn.commit()


def get_beneficiaries(conn):
    return conn.execute(
        "SELECT id, full_name, service, matricule FROM beneficiaries ORDER BY full_name"
    ).fetchall()


def get_vouchers(conn):
    return conn.execute(
        """
        SELECT v.id, b.full_name, b.service, b.matricule, v.voucher_date, v.meal_type, v.amount, v.status, COALESCE(v.notes, '')
        FROM meal_vouchers v
        JOIN beneficiaries b ON b.id = v.beneficiary_id
        ORDER BY v.voucher_date DESC, v.id DESC
        """
    ).fetchall()


st.set_page_config(page_title="Gestion Bon Repas - CHU Oujda", layout="wide")
st.title("🍽️ Gestion des bons repas - CHU Oujda")

conn = get_conn()
init_db(conn)

with st.sidebar:
    st.header("Actions")
    page = st.radio("Navigation", ["Tableau de bord", "Nouveau bénéficiaire", "Nouveau bon repas"])

if page == "Nouveau bénéficiaire":
    st.subheader("Ajouter un bénéficiaire")
    with st.form("beneficiary_form"):
        full_name = st.text_input("Nom complet")
        service = st.text_input("Service / Département")
        matricule = st.text_input("Matricule")
        submit = st.form_submit_button("Enregistrer")

    if submit:
        if not all([full_name.strip(), service.strip(), matricule.strip()]):
            st.error("Tous les champs sont obligatoires.")
        else:
            try:
                add_beneficiary(conn, full_name.strip(), service.strip(), matricule.strip())
                st.success("Bénéficiaire ajouté avec succès.")
            except sqlite3.IntegrityError:
                st.error("Ce matricule existe déjà.")

elif page == "Nouveau bon repas":
    st.subheader("Émettre un bon repas")
    beneficiaries = get_beneficiaries(conn)
    if not beneficiaries:
        st.warning("Ajoutez d'abord un bénéficiaire.")
    else:
        beneficiary_map = {
            f"{row[1]} ({row[3]}) - {row[2]}": row[0] for row in beneficiaries
        }
        with st.form("voucher_form"):
            selected = st.selectbox("Bénéficiaire", list(beneficiary_map.keys()))
            voucher_date = st.date_input("Date", value=date.today())
            meal_type = st.selectbox("Type de repas", ["Petit-déjeuner", "Déjeuner", "Dîner"])
            amount = st.number_input("Montant (MAD)", min_value=0.0, value=30.0, step=1.0)
            notes = st.text_area("Notes")
            submit = st.form_submit_button("Émettre")

        if submit:
            add_voucher(
                conn,
                beneficiary_map[selected],
                voucher_date,
                meal_type,
                float(amount),
                notes.strip(),
            )
            st.success("Bon repas émis avec succès.")

else:
    st.subheader("Tableau de bord")
    vouchers = get_vouchers(conn)
    beneficiaries = get_beneficiaries(conn)

    col1, col2 = st.columns(2)
    col1.metric("Bénéficiaires", len(beneficiaries))
    col2.metric("Bons repas émis", len(vouchers))

    st.markdown("### Historique des bons repas")
    if vouchers:
        st.dataframe(
            vouchers,
            use_container_width=True,
            column_config={
                0: "ID",
                1: "Nom",
                2: "Service",
                3: "Matricule",
                4: "Date",
                5: "Repas",
                6: "Montant (MAD)",
                7: "Statut",
                8: "Notes",
            },
        )
    else:
        st.info("Aucun bon repas pour le moment.")
