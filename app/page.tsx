"use client";
import BackgroundImage from "$/components/BackgroundImage/BackgroundImage";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <BackgroundImage />
    </div>
  );
}
