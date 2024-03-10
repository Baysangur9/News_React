import {formateTimeAgo} from "../../helpers/formateTimeAgo";
import withSkeleton from "../../helpers/hocs/withSkeleton";

import styles from "../../styles/newsbanner.module.css";
import Image from "../Image/Image";

const NewsBanner = ({item}) => {
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

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;
