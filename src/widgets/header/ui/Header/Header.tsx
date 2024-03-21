import { useTheme } from "@/app/providers/ThemeProvider";
import { formateDate } from "@/shared/helpers/formateDate";
import styles from "./header.module.css"
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton";
import { Link } from "react-router-dom";




const Header = () => {
  const { isDark } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <Link to={"/"}>
          <h1 className={styles.title}>REACT_NEWS</h1>
        </Link>

        <p className={styles.date}>{formateDate(new Date())}</p>
      </div>

      <ThemeButton />
    </header>
  );
};

export default Header;
