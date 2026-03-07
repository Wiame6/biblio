"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/books", label: "Books", icon: "📚" },
  { href: "/members", label: "Members", icon: "👥" },
  { href: "/loans", label: "Loans", icon: "🔄" },
];

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__brand">
        <div className="admin-sidebar__logo">📘</div>
        <div>
          <div className="admin-sidebar__title">BiblioAdmin</div>
          <div className="admin-sidebar__subtitle">University Library</div>
        </div>
      </div>

      <nav className="admin-sidebar__nav">
        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "admin-sidebar__link admin-sidebar__link--active"
                  : "admin-sidebar__link"
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="admin-sidebar__footer">
        <div className="admin-sidebar__user">Responsable bibliothèque</div>
        <Link href="/" className="admin-sidebar__back">
          ← Retour au site
        </Link>
      </div>
    </aside>
  );
}