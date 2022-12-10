import { onClick } from '../helpers/getAPI';
// const arr = onClick();
// console.log(arr);

export function Searchbar({ onSubmit }) {
  return (
    <header className="searchbar">
      <form
        className="form"
        onSubmit={event => {
          return onSubmit(event);
        }}
      >
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
