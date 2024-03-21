import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import PaginationWrapper from "@/features/pagination/ui/Pagination/Pagination";
import {TOTAL_PAGES} from "@/shared/constants/constants";
import { IFilteres } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filteres: IFilteres;
  news:INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({filteres,news, isLoading}: Props) => {
  const {hundleNextPage, hundlePrevPage, hundlePageClic} = usePaginationNews(filteres);

  return (
    <PaginationWrapper
      top
      bottom
      totalPages={TOTAL_PAGES}
      currentPage={filteres.page_number}
      hundleNextPage={hundleNextPage}
      hundlePrevPage={hundlePrevPage}
      hundlePageClic={hundlePageClic}
    >
      <NewsList
        direction="column"
        type="item"
        isLoading={isLoading}
        news={news}
      />
    </PaginationWrapper>
  );
};

export default NewsListWithPagination;
