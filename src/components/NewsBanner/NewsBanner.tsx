import {formateTimeAgo} from "../../helpers/formateTimeAgo";
import { INews } from "../../interfaces";

import styles from "../../styles/newsbanner.module.css";
import Image from "../Image/Image";

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
