import styles from "../../styles/main.module.css";
import {getNews} from "../../api/apiNews";
import {useDebounce} from "../../helpers/hooks/useDebounce";
import {PAGE_SIZE} from "../../constants/constants";
import {useFetch} from "../../helpers/hooks/useFetch";
import {useFilteres} from "../../helpers/hooks/useFilters";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilter from "../../components/NewsByFilter/NewsByFilter";

const Main = () => {
  const {filteres, changeFilteres} = useFilteres({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debounceKeywords = useDebounce(filteres.keywords, 1500);
  const {data, isLoading} = useFetch(getNews, {
    ...filteres,
    keywords: debounceKeywords,
  });

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.news} />

      <NewsByFilter
        news={data?.news}
        isLoading={isLoading}
        filteres={filteres}
        changeFilteres={changeFilteres}
      />
    </main>
  );
};

export default Main;
