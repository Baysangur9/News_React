import styles from "../../styles/latestsnews.module.css";
import BannersList from "../BannersList/BannerList";
import {useFetch} from "../../helpers/hooks/useFetch";
import {getLatestNews} from "../../api/apiNews";
import {  NewsApiResponce } from "../../interfaces";

const LatestNews = () => {
  const {data, isLoading} = useFetch<NewsApiResponce, null>(getLatestNews);
  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
