import styles from "../../styles/skeleton.module.css";

const Skeleton = ({count = 1, type = "banner"}) => {
  <>
    {count > 1 ? (
      <ul className={styles.list}>
        {[...Array(count)].map((_, index) => (
          <li
            key={index}
            className={type === "banner" ? styles.banner : styles.item}
          ></li>
        ))}
      </ul>
    ) : (
      <li className={type === "banner" ? styles.banner : styles.item}></li>
    )}
  </>;
};

export default Skeleton;
