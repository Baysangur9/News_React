import { useAppDispatch } from "@/app/appStore";
import { useTheme } from "@/app/providers/ThemeProvider";
import Categories from "@/features/category/Categories/Categories";
import Search from "@/features/search/ui/Search/Search";
import Slider from "@/features/slider/ui/Slider/Slider";
import { IFilteres } from "@/shared/interfaces";
import { setFilteres } from "@/entities/news/modal/newsSlice";
import styles from "./newsfilter.module.css";
import { CategoriesType } from "@/entities/category";



interface Props {
filteres: IFilteres,
categories: CategoriesType[],
}

const NewsFilter = ({filteres, categories}:Props) => {
  const {isDark} = useTheme();
  const dispatch = useAppDispatch();


  return (
    <div className={styles.filter}>
      {categories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
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
