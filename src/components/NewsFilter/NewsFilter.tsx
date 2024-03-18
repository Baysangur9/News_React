import { useTheme } from "../../context/ThemeContext";
import {  IFilteres } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/newsApi";
import { setFilteres } from "../../store/slices/newsSlice";
import styles from "../../styles/newsfilter.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";

interface Props {
filteres: IFilteres,
}

const NewsFilter = ({filteres}:Props) => {
  const {isDark} = useTheme();
  const {data} = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();


  return (
    <div className={styles.filter}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            setSelectedCategory={(category) =>
              dispatch(setFilteres({key: "category", value: category}))
            }
            selectedCategory={filteres.category}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filteres.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilteres({key: "keywords", value: keywords}))}
      />
    </div>
  );
};

export default NewsFilter;
