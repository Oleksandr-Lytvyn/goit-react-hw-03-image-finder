// import { onLoadMore } from '../helpers/getAPI';

export function Button({ nextPage }) {
  return (
    <button
      type="button"
      onClick={() => {
        // updatePage();
        nextPage();
        // updateResult();
      }}
    >
      load more
    </button>
  );
}
