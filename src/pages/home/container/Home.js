import styles from "../../../assets/styles/home.module.scss";
import Stats from "../components/Stats";
export default function Home() {
  return (
    <section className={styles.homeSection}>
      <Stats />
    </section>
  );
}
