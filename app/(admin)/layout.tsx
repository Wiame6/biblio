import SideBar from "../components/admin/sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="admin-body">
        <div className="admin-layout">
          <SideBar />
          <main className="admin-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
