// import { onLoadMore } from '../helpers/getAPI';
import { ButtonLoadMore, ButtonSection } from './Button.styled';

export function Button({ nextPage }) {
  return (
    <ButtonSection>
      <ButtonLoadMore
        type="button"
        onClick={() => {
          // updatePage();
          nextPage();
          // updateResult();
        }}
      >
        load more
      </ButtonLoadMore>
    </ButtonSection>
  );
}
