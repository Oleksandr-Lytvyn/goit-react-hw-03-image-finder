import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  toggle,
  updateLargeImg,
}) {
  return (
    <GalleryItem
      className="gallery-item"
      onClick={event => {
        console.log(event);
        updateLargeImg(largeImageURL);
        toggle();
      }}
    >
      <GalleryItemImg src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}
