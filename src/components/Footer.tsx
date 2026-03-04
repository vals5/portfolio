import { personal } from "@/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        {personal.initials}<span>.</span>
      </div>
      <p>© 2026 {personal.name}. All rights reserved.</p>
    </footer>
  );
}