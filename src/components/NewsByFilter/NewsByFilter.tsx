import {getNews} from "../../api/apiNews";
import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants";
import {useDebounce} from "../../helpers/hooks/useDebounce";
import {useFetch} from "../../helpers/hooks/useFetch";
import {useFilteres} from "../../helpers/hooks/useFilters";
import { NewsApiResponce, ParamsType } from "../../interfaces";
import styles from "../../styles/newsbyfilter.module.css";
import NewsFilter from "../NewsFilter/NewsFilter";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";



const NewsByFilter = () => {
  const {changeFilteres, filteres} = useFilteres({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debounceKeywords = useDebounce(filteres.keywords, 1500);
  const {data, isLoading} = useFetch<NewsApiResponce, ParamsType>(getNews, {
    ...filteres,
    keywords: debounceKeywords,
  });
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
  const hundlePageClic = (pageNumber:number) => {
    changeFilteres("page_number", pageNumber);
  };
  return (
    <section className={styles.section}>
      <NewsFilter  filteres={filteres} changeFilteres={changeFilteres} />

      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGES}
        currentPage={filteres.page_number}
        hundleNextPage={hundleNextPage}
        hundlePrevPage={hundlePrevPage}
        hundlePageClic={hundlePageClic}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilter;
