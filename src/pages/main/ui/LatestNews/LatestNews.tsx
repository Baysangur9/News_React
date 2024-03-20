import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import BannersListWithSkeleton from "@/widgets/news/ui/BannersList/BannerList";
import styles from "./latestsnews.module.css";


const LatestNews = () => {
  const {data, isLoading} = useGetLatestNewsQuery(null)


  return (
    <section className={styles.section}>
      <BannersListWithSkeleton banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
