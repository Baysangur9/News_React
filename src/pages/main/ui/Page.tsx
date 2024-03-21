import styles from "./main.module.css"
import LatestNews from "./LatestNews/LatestNews";
import NewsByFilter from "./NewsByFilter/NewsByFilter";
import { useTheme } from "../../../app/providers/ThemeProvider";




const MainPage = () => {
  const {} = useTheme()
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilter />
    </main>
  );
};

export default MainPage;
