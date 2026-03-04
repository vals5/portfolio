import { skillCategories } from "@/data";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className="sec" id="experience">
      <span className="sec-label fade">What I know</span>
      <h2 className="sec-title fade">My <span>Skills</span></h2>

      <div className={styles.grid}>
        {skillCategories.map((cat) => (
          <div key={cat.title} className={`${styles.box} fade`}>
            <div className={styles.boxTitle}>
              <i className={cat.icon} />
              {cat.title}
            </div>
            <div className={styles.tags}>
              {cat.skills.map((skill) => (
                <span key={skill} className={styles.tag}>
                  <span className={styles.dot} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}