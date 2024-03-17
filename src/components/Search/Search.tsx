import styles from "../../styles/search.module.css";

interface Props {
  keywords: string
  setKeywords: (keywords : string) => void
}

const Search = ({keywords, setKeywords}:Props) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={keywords}
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="JavaScript and React News"
      />
    </div>
  );
};

export default Search;
