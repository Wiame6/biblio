"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="nav">
      <div className="nav-container">
        <Link href="/" className="logo">
          📚 Biblio
        </Link>

        {/* Desktop */}
        <nav className="nav-links">
          <Link href="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>
            About
          </Link>
          <Link href="/contact" className={isActive("/contact") ? "active" : ""}>
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="burger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}