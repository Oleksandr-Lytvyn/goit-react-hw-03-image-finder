import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images, toggle }) {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            toggle={toggle}
          />
        );
      })}
    </ul>
  );
}
