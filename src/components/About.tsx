import { about, personal } from "@/data";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">

      <div className={styles.left}>
        <span className="sec-label fade">Who I am</span>
        <h2 className="sec-title fade">About <span>Me</span></h2>

        {personal.avalableForWork && (
          <div className={`${styles.otw} fade`}>
            <span className={styles.otwDot} />
            Open to work — available now
          </div>
        )}

        {about.paragraphs.map((p, i) => (
          <p key={i} className={`${styles.text} fade`}>{p}</p>
        ))}

        <div className={styles.stats}>
          {about.stats.map((s, i) => (
            <div key={i} className={`${styles.stat} fade`}>
              <div className={styles.statNum}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.visual} fade`}>
        <div className={styles.frame}><img src="/assets/ProfilePic.jpg" alt="Valentina Sosa" /></div>
        <div className={styles.badge}>{personal.name}</div>
      </div>

    </section>
  );
}