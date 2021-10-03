import styles from "../../../assets/styles/home.module.scss";
import Stats from "../components/Stats";
import SuggestedProjects from "../components/SuggestedProjects";
export default function Home() {
  return (
    <section className={styles.homeSection}>
      <Stats />
      <SuggestedProjects />
    </section>
  );
}
