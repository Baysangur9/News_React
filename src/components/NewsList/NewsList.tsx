import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import styles from "../../styles/newslist.module.css";
import NewsItem from "../NewsItem/NewsItem";

interface Props {
  news?: INews[];
}

const NewsList = ({news}: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
