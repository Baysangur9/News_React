import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import Categories from "@/features/category/Categories/Categories";
import Search from "@/features/search/ui/Search/Search";
import Slider from "@/features/slider/ui/Slider/Slider";
import { IFilteres } from "@/shared/interfaces";
import { setFilteres } from "@/entities/news/modal/newsSlice";
import styles from "./newsfilter.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";


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
