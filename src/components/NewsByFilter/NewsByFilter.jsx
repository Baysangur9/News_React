import {getCategories} from "../../api/apiNews";
import {TOTAL_PAGES} from "../../constants/constants";
import {useFetch} from "../../helpers/hooks/useFetch";
import styles from "../../styles/newsbyfilter.module.css";
import NewsFilter from "../NewsFilter/NewsFilter";
import NewsListWithSkeleton from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";

const NewsByFilter = ({filteres, changeFilteres, isLoading, news}) => {
  const {data: dataCategories} = useFetch(getCategories);
  const hundleNextPage = () => {
    if (filteres.page_number < TOTAL_PAGES) {
      changeFilteres("page_number", filteres.page_number + 1);
    }
  };
  const hundlePrevPage = () => {
    if (filteres.page_number > 1) {
      changeFilteres("page_number", filteres.page_number - 1);
    }
  };
  const hundlePageClic = (pageNumber) => {
    changeFilteres("page_number", pageNumber);
  };
  return (
    <section className={styles.section}>
      <NewsFilter filteres={filteres} changeFilteres={changeFilteres} />

      <Pagination
        totalPages={TOTAL_PAGES}
        currentPage={filteres.page_number}
        hundleNextPage={hundleNextPage}
        hundlePrevPage={hundlePrevPage}
        hundlePageClic={hundlePageClic}
      />

      <NewsListWithSkeleton isLoading={isLoading} news={news} />

      <Pagination
        totalPages={TOTAL_PAGES}
        currentPage={filteres.page_number}
        hundleNextPage={hundleNextPage}
        hundlePrevPage={hundlePrevPage}
        hundlePageClic={hundlePageClic}
      />
    </section>
  );
};

export default NewsByFilter;
