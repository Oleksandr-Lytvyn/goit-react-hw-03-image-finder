import PropTypes from 'prop-types';

import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images, toggle, updateLargeImg }) {
  // if (images.length === 0) {
  //   return <p>no results</p>;
  // }
  return (
    <GalleryList className="gallery">
      {}
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            toggle={toggle}
            updateLargeImg={updateLargeImg}
          />
        );
      })}
    </GalleryList>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  toggle: PropTypes.func,
  updateLargeImg: PropTypes.func,
};
