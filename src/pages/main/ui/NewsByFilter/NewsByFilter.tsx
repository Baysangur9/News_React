import { useAppSelector } from "@/app/appStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./newsbyfilter.module.css";
import { NewsFilter } from "@/widgets/news/ui";
import NewsListWithPagination  from "@/pages/main/ui/NewsListWithPagination/NewsListWithPagination";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";




const NewsByFilter = () => {


  const filteres = useAppSelector((state) => state.news.filteres);
  const news = useAppSelector((state) => state.news.news);

  const debounceKeywords = useDebounce(filteres.keywords, 1500);
  const { isLoading} = useGetNewsQuery({
    ...filteres,
    keywords: debounceKeywords,
  })

  const {data} = useGetCategoriesQuery(null)

  return (
    <section className={styles.section}>
      <NewsFilter  filteres={filteres} categories={data?.categories || []} />



      <NewsListWithPagination isLoading={isLoading} filteres={filteres} news={news} />
    </section>
  );
};

export default NewsByFilter;
