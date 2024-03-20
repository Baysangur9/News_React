import { formateTimeAgo } from "@/shared/helpers/formateTimeAgo";
import styles from "./newsitem.module.css";
import { INews } from "@/entities/news/modal/types";

interface Props {
  item: INews;
}

const NewsItem = ({item}: Props) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{backgroundImage: `url(${item?.image})`}}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item?.title}</h3>
        <p className={styles.extra}>
          {formateTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
