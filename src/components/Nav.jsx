import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return; // avoid empty searches
    setLoading(true);
    await onSearch(query.trim());
    setLoading(false);
    setQuery(""); 
  };

  const handleHomeClick = () => {
    setQuery(""); 
    onSearch(""); 
    navigate("/"); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          onClick={handleHomeClick}         >
          Artwork search engine
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navCollapse"
          aria-controls="navCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navCollapse">
          <form className="d-flex ms-auto me-3" onSubmit={handleSubmit} role="search">
            <input
              className="form-control me-2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              aria-label="Search"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn btn-outline-light"
            >
              {loading ? "Searching…" : "Search"}
            </button>
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

