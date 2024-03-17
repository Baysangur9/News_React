import styles from "../../styles/bannerlist.module.css";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import { INews } from "../../interfaces";

interface Props {
  banners?: INews[] | null;
}

const BannerList = ({banners}:Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton<Props>(BannerList, "banner", 10, "row");

export default BannersListWithSkeleton;