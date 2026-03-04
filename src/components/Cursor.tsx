"use client";

import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      if (dotRef.current)  { dotRef.current.style.left  = x; dotRef.current.style.top  = y; }
      if (ringRef.current) { ringRef.current.style.left = x; ringRef.current.style.top = y; }
    };
    const expand = () => {
      dotRef.current?.classList.add(styles.expand);
      ringRef.current?.classList.add(styles.expandRing);
    };
    const shrink = () => {
      dotRef.current?.classList.remove(styles.expand);
      ringRef.current?.classList.remove(styles.expandRing);
    };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
}