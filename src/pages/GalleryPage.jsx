
import ArtList from "../components/ArtList";

function GalleryPage({ products, loading, page, hasNext, handlePageChange }) {
  return (
    <ArtList
      itemData={products}
      loading={loading}
      page={page}
      hasNext={hasNext}
      onPageChange={handlePageChange}
    />
  );
}

export default GalleryPage;
