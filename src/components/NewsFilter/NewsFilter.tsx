import {getCategories} from "../../api/apiNews";
import {useFetch} from "../../helpers/hooks/useFetch";
import { CategoriesApiResponce, IFilteres } from "../../interfaces";
import styles from "../../styles/newsfilter.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";

interface Props {
filteres: IFilteres,
changeFilteres: (key:string, value: string | number | null) => void
}

const NewsFilter = ({filteres, changeFilteres}:Props) => {
  const {data: dataCategories} = useFetch<CategoriesApiResponce,null>(getCategories);
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
