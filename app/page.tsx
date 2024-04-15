"use client";
import BackgroundImage from "$/components/BackgroundImage/BackgroundImage";
import Description from "$/components/Description/Description";
import Header from "$/components/Header/Header";
import Title from "$/components/TitileAndPrice/TitileAndPrice";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Description />
      <Title />
      <BackgroundImage />
    </div>
  );
}
