
import styles from "./newslist.module.css";
import { INews } from "@/entities/news";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard";
import withSkeleton from "@/shared/hocs/withSkeleton";

interface Props {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
}

const NewsList = ({news, type = "item"}: Props) => {
  return (
    <ul className={`${type === "banner" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
