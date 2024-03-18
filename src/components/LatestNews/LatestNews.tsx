import styles from "../../styles/latestsnews.module.css";
import BannersList from "../BannersList/BannerList";
import { useGetLatestNewsQuery } from "../../store/services/newsApi";

const LatestNews = () => {
  const {data, isLoading} = useGetLatestNewsQuery(null)


  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
