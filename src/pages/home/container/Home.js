import styles from "../../../assets/styles/home.module.scss";
import Stats from "../components/Stats";
import SuggestedProjects from "../components/SuggestedProjects";
import SlackBanner from "../components/SlackBanner";
import Activity from "../components/Activity";
export default function Home() {
  return (
    <section className={styles.homeSection}>
      <Stats />
      <SuggestedProjects />
      <SlackBanner />
      <Activity />
    </section>
  );
}
