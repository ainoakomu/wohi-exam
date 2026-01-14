import ArtCard from "./ArtCard";

const ArtList = ({
  itemData = [],
  loading = false,
  page = 1,
  hasNext = false,
  onPageChange = () => {},
}) => {
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <div className="mt-2">Loading artworks...</div>
      </div>
    );
  }

  if (!Array.isArray(itemData) || itemData.length === 0) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning" role="alert">
          No artworks to display.
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row g-4">
        {itemData.map((item) => (
          <div className="col-md-4" key={item.id}>
            <ArtCard {...item} />
          </div>
        ))}
      </div>

      {/* ✅ Pagination controls */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-primary me-2"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
        >
          ← Previous
        </button>
        <span className="align-self-center">Page {page}</span>
        <button
          className="btn btn-outline-primary ms-2"
          disabled={!hasNext}
          onClick={() => onPageChange(page + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ArtList;



