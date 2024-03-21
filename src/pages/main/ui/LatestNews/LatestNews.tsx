import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";

import styles from "./latestsnews.module.css";
import { NewsList } from "@/widgets/news/ui";


const LatestNews = () => {
  const {data, isLoading} = useGetLatestNewsQuery(null);


  return (
    <section className={styles.section}>
      <NewsList news={data && data.news} isLoading={isLoading} direction={"row"} type={"banner"} />
    </section>
  );
};

export default LatestNews;
