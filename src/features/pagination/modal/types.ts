export interface IPaginationProps {
totalPages: number;
currentPage: number;
hundlePageClic: (page: number) => void;
hundleNextPage: () => void;
hundlePrevPage: () => void;
}
