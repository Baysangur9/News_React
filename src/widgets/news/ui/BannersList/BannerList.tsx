import NewsBanner from "@/entities/news/ui/NewsBanner/NewsBanner";
import withSkeleton from "@/shared/hocs/withSkeleton";
import styles from "./bannerlist.module.css";
import { INews } from "@/entities/news/modal/types";


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
