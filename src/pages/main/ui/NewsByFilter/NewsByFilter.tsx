import { useAppDispatch, useAppSelector } from "@/app/appStore";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { setFilteres } from "@/entities/news/modal/newsSlice";
import styles from "./newsbyfilter.module.css";
import NewsFilter from "../NewsFilter/NewsFilter";




const NewsByFilter = () => {

  const dispatch = useAppDispatch()

  const filteres = useAppSelector((state) => state.news.filteres);
  const news = useAppSelector((state) => state.news.news);

  const debounceKeywords = useDebounce(filteres.keywords, 1500);
  const { isLoading} = useGetNewsQuery({
    ...filteres,
    keywords: debounceKeywords,
  })
  const hundleNextPage = () => {
    if (filteres.page_number < TOTAL_PAGES) {
      dispatch(setFilteres({key: "page_number", value: filteres.page_number + 1}))
    }
  };
  const hundlePrevPage = () => {
    if (filteres.page_number > 1) {
      dispatch(setFilteres({key: "page_number", value: filteres.page_number - 1}))
    }
  };
  const hundlePageClic = (pageNumber:number) => {
    dispatch(setFilteres({key: "page_number", value: pageNumber}))
  };
  return (
    <section className={styles.section}>
      <NewsFilter  filteres={filteres} />

      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGES}
        currentPage={filteres.page_number}
        hundleNextPage={hundleNextPage}
        hundlePrevPage={hundlePrevPage}
        hundlePageClic={hundlePageClic}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilter;
