// import { onClick } from '../helpers/getAPI';
// const arr = onClick();
// console.log(arr);
import { Header } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchFormButton } from './Searchbar.styled';
import { SearchFormButtonLabel } from './Searchbar.styled';
import { SearchFormInput } from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  return (
    <Header className="searchbar">
      <SearchForm
        className="form"
        onSubmit={event => {
          return onSubmit(event);
        }}
      >
        <SearchFormButton type="submit" className="button">
          <SearchFormButtonLabel className="button-label">
            Search
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
}
