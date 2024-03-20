import { formateTimeAgo } from "@/shared/helpers/formateTimeAgo";

import styles from "./newsbanner.module.css";
import Image from "@/shared/ui/Image/Image";
import { INews } from "@/entities/news/modal/types";


interface Props {
  item: INews;
}

const NewsBanner = ({item}: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.date}>
        {formateTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
