"use client";

import { useState } from "react";
import { projects, ProjectType } from "@/data";
import styles from "./Projects.module.css";

type Filter = "all" | ProjectType;

const filters: { label: string; value: Filter }[] = [
  { label: "All",  value: "all"  },
  { label: "Web",  value: "web"  },
  { label: "App",  value: "app"  },
  { label: "Game", value: "game" },
];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const visible = projects.filter(
    (p) => active === "all" || p.type === active
  );

  return (
    <section className="sec" id="projects">
      <span className="sec-label fade">What I&apos;ve built</span>
      <h2 className="sec-title fade">My <span>Projects</span></h2>

      <div className={`${styles.filterBar} fade`}>
        {filters.map((f) => (
          <button
            key={f.value}
            className={`${styles.fBtn} ${active === f.value ? styles.fBtnActive : ""}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((p) => (
          <div key={p.name} className={`${styles.card} fade`}>
            <div className={styles.thumb}>
              <span className={styles.emoji}>{p.emoji}</span>
              <span className={styles.badge}>{p.type}</span>
            </div>
            <div className={styles.info}>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.desc}>{p.description}</div>
              <div className={styles.links}>
                {p.github && (
                  <a className={`${styles.pl} ${styles.plGh}`} href={p.github} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github" /> Code
                  </a>
                )}
                {p.live && (
                  <a className={`${styles.pl} ${styles.plLive}`} href={p.live} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-arrow-up-right-from-square" /> {p.liveLabel ?? "Live"}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}