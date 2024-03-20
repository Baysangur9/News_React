import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./pagination.module.css";
import { IPaginationProps } from "../../modal/types";


const Pagination = ({
  totalPages,
  currentPage,
  hundlePageClic,
  hundleNextPage,
  hundlePrevPage,
}:IPaginationProps) => {
  const {isDark} = useTheme();
  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
      <button
        disabled={currentPage <= 1}
        onClick={hundlePrevPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => hundlePageClic(index + 1)}
              className={styles.pageNumber}
              key={index}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={hundleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
