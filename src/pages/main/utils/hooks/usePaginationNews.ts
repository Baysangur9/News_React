import { useAppDispatch } from "@/app/appStore";
import { setFilteres } from "@/entities/news/modal/newsSlice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilteres } from "@/shared/interfaces";

export const usePaginationNews = (filteres: IFilteres) => {
  const dispatch = useAppDispatch();

  const hundleNextPage = () => {
    if (filteres.page_number < TOTAL_PAGES) {
      dispatch(
        setFilteres({key: "page_number", value: filteres.page_number + 1})
      );
    }
  };
  const hundlePrevPage = () => {
    if (filteres.page_number > 1) {
      dispatch(
        setFilteres({key: "page_number", value: filteres.page_number - 1})
      );
    }
  };
  const hundlePageClic = (pageNumber: number) => {
    dispatch(setFilteres({key: "page_number", value: pageNumber}));
  };

  return {
    hundleNextPage,
    hundlePrevPage,
    hundlePageClic,
  };
}