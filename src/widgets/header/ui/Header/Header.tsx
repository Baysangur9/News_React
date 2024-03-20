import { useTheme } from "@/app/providers/ThemeProvider";
import { formateDate } from "@/shared/helpers/formateDate";
import styles from "./header.module.css"
import ThemeButton from "@/features/theme/ui/ThemeButton/ThemeButton";




const Header = () => {
  const {isDark} = useTheme()
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>WorldNews</h1>
        <p className={styles.date}>{formateDate(new Date())}</p>
      </div>

      <ThemeButton />
    </header>
  );
};

export default Header;
