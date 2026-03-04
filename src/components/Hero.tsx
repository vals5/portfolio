"use client";
import { useEffect, useState } from "react";
import { personal } from "@/data";
import styles from "./Hero.module.css";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const word = personal.role[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 68);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 42);
      } else {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % personal.role.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className={styles.hero} id="profile">
      <div className={styles.inner}>

        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Available for work
        </div>

        <h1 className={styles.name}>
          {personal.name.split(" ")[0]}<br />
          <span>{personal.name.split(" ")[1]}</span>
        </h1>

        <p className={styles.role}>
          I&apos;m a <span className={styles.typed}>{displayed}</span>
          <span className={styles.blink} />
        </p>

        <p className={styles.desc}>{personal.tagline}</p>

        <div className={styles.btns}>
          <button className={styles.btnSolid} onClick={() => window.open(personal.cv)}>
            Download CV
          </button>
          <button className={styles.btnGhost} onClick={() => { window.location.href = "#contact"; }}>
            Get in touch
          </button>
        </div>

        <div className={styles.socials}>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fa-brands fa-github" />
          </a>
        </div>

      </div>
    </section>
  );
}