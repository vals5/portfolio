"use client";

import { useState } from "react";
import { personal } from "@/data";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about",      label: "About"    },
  { href: "#experience", label: "Skills"   },
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact"  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP */}
      <nav className={styles.desktop}>
        <a href="#profile" className={styles.logo}>
          {personal.initials}<span>.</span>
        </a>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>

      {/* MOBILE */}
      <nav className={styles.mobile}>
        <a href="#profile" className={styles.logo}>
          {personal.initials}<span>.</span>
        </a>
        <div className={styles.hamWrap}>
          <div
            className={`${styles.hamIcon} ${open ? styles.open : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </div>
          <ul className={`${styles.mobMenu} ${open ? styles.menuOpen : ""}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}