import styles from "../../styles/latestsnews.module.css";
import BannersList from "../BannersList/BannerList";

const LatestNews = ({banners, isLoading}) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
