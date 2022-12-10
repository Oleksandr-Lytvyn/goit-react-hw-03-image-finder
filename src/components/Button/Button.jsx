import { onLoadMore } from '../helpers/getAPI';

export function Button({ query, updateResult, updatePage, page }) {
  return (
    <button
      type="button"
      onClick={() => {
        // updatePage();
        onLoadMore(query, updateResult, page);
        // updateResult();
      }}
    >
      load more
    </button>
  );
}
