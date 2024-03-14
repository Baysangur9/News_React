import {getCategories} from "../../api/apiNews";
import {useFetch} from "../../helpers/hooks/useFetch";
import styles from "../../styles/newsfilter.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";

const NewsFilter = ({filteres, changeFilteres}) => {
  const {data: dataCategories} = useFetch(getCategories);
  return (
    <div className={styles.filter}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              changeFilteres("category", category)
            }
            selectedCategory={filteres.category}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filteres.keywords}
        setKeywords={(keywords) => changeFilteres("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilter;
