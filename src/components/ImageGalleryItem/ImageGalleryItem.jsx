export function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  toggle,
}) {
  return (
    <li
      className="gallery-item"
      onClick={() => {
        toggle();
      }}
    >
      <img src={webformatURL} alt={tags} />
    </li>
  );
}
