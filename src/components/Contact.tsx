import { personal } from "@/data";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <span className="sec-label fade">Let&apos;s talk</span>
      <h2 className="sec-title fade">Contact <span>Me</span></h2>

      <div className={`${styles.card} fade`}>
        <p className={styles.note}>
          Feel free to reach out for work opportunities or just a friendly hello 👋
        </p>
        <a className={styles.email} href={`mailto:${personal.email}`}>
          {personal.email}
        </a>
        <div className={styles.links}>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" /> LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}