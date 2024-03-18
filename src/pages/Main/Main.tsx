import styles from "../../styles/main.module.css";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilter from "../../components/NewsByFilter/NewsByFilter";
import { useTheme } from "../../context/ThemeContext";



const Main = () => {
  const {isDark} = useTheme()
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilter />
    </main>
  );
};

export default Main;
