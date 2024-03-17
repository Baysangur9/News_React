import { DirectionType, SkeletonType } from "../../interfaces";
import styles from "../../styles/skeleton.module.css";

interface Props {
  type?:SkeletonType ,
  count?:number,
  direction?:DirectionType
}

const Skeleton = ({count = 1, type = "banner", direction = "column"}:Props):JSX.Element => {
  return (
    <>
      {count > 1 ? (
        <ul
          className={direction === "column" ? styles.columnList : styles.rowList}
        >
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === "banner" ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default Skeleton;
