import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ArtCard({ id, title, image_id, date_display, artist_title }) {
  const src = image_id
    ? `https://www.artic.edu/iiif/2/${image_id}/full/600,/0/default.jpg`
    : "/web_404.jpg";

  return (
    <Card className="h-100">
      <div style={{ height: 180, overflow: "hidden" }}>
        <img
          src={src}
          alt={title || "Artwork image"}
          loading="lazy"
          className="img-fluid w-100"
          style={{ objectFit: "cover", height: "100%" }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/fallback.jpg";
          }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-1" style={{ fontSize: "1rem" }}>
          {title}
        </Card.Title>

        <Card.Text className="text-muted mb-3" style={{ fontSize: "0.875rem" }}>
          {artist_title} {date_display ? `· ${date_display}` : ""}
        </Card.Text>

        <div className="mt-auto">
          <Button
            href={`https://www.artic.edu/artworks/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-primary"
            className="w-100"
            type="link"
          >
            See the official site
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ArtCard;
