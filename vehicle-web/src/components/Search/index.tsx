import styles from "./Search.module.scss"

interface ISearch {
  value: string;
  onChange: (e: any) => void;
}

const Search = (props: ISearch) => {
  return (
    <div className={styles.search_filter}>
      <label>Search</label>
      <input className={styles.input} type="text" value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Search;
