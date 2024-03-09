import {useEffect, useState} from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "../../styles/main.module.css";
import {getCategories, getNews} from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const responce = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
      });
      setNews(responce.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(categories);
  const fetchCategories = async () => {
    try {
      const responce = await getCategories();
      setCategories(["All", ...responce.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  });

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory]);

  const hundleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const hundlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const hundlePageClic = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hundleNextPage={hundleNextPage}
        hundlePrevPage={hundlePrevPage}
        hundlePageClic={hundlePageClic}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hundleNextPage={hundleNextPage}
        hundlePrevPage={hundlePrevPage}
        hundlePageClic={hundlePageClic}
      />
    </main>
  );
};

export default Main;
