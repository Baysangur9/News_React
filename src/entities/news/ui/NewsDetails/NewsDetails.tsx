import Image from "@/shared/ui/Image/Image";
import styles from "./newsdetails.module.css";
import { INews } from "../..";




interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  function formatTimeAgo(_published: any): import("react").ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <p>
          {item.descriotion} ({item.language}){" "}
          <a target="_blank" href={item.url}>
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => {
            return <button className={styles.active}>{category}</button>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;