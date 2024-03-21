import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";

import styles from "./latestsnews.module.css";
import { NewsList } from "@/widgets/news/ui";
import { INews } from "@/entities/news";
import { useAppDispatch } from "@/app/appStore";
import { setCurrentNews } from "@/entities/news/modal/newsSlice";
import { useNavigate } from "react-router-dom";


const LatestNews = () => {
  const {data, isLoading} = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const navigateTo = (news:INews) => {
    dispatch(setCurrentNews(news))
    navigate(`/news/${news.id}`)
  }

  return (
    <section className={styles.section}>
      <NewsList
        news={data && data.news}
        isLoading={isLoading}
        direction={"row"}
        type={"banner"}
        viewNewsSlot={(news:INews) => <p onClick={() => navigateTo(news)}>View more...</p>}
        />
    </section>
  );
};

export default LatestNews;
