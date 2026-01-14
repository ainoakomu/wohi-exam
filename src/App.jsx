import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GalleryPage from "./pages/GalleryPage";
import ErrorModal from "./components/ErrorModal";
import { getArtworks, searchArtWorksWithFull } from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");

  const openError = (msg) => {
    setErrorMsg(msg);
    setShowErrorModal(true);
  };

  const closeError = () => {
    setErrorMsg(null);
    setShowErrorModal(false);
  };

  const fetchAll = async (pageNum = 1) => {
    setLoading(true);
    try {
      const all = await getArtworks(pageNum);
      setProducts(Array.isArray(all.data) ? all.data : []);
      setHasNext(!!all.pagination?.next_url);
    } catch (err) {
      console.error(err);
      openError("Failed to load artworks. Please try again.");
      setProducts([]);
      setHasNext(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query, pageNum = 1) => {
    const q = (query || "").trim();
    setCurrentQuery(q);
    setPage(1); 
    setLoading(true);
    try {
      if (!q) {
        await fetchAll(pageNum);
        return;
      }
      const res = await searchArtWorksWithFull(q, pageNum);
      setProducts(Array.isArray(res) ? res : []);
      setHasNext(res?.length > 0);
      if (!res || res.length === 0) {
        openError("No results found for your search.");
      }
    } catch (err) {
      console.error(err);
      openError("Search failed. Please check your connection and try again.");
      setProducts([]);
      setHasNext(false);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = async (newPage) => {
    setPage(newPage);
    if (currentQuery) {
      await handleSearch(currentQuery, newPage);
    } else {
      await fetchAll(newPage);
    }
  };

  useEffect(() => {
    fetchAll(page);
  }, [page]);

  return (
    <Router>
      {/* Navbar always visible */}
      <Nav onSearch={handleSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <GalleryPage
              products={products}
              loading={loading}
              page={page}
              hasNext={hasNext}
              handlePageChange={handlePageChange}
            />
          }
        />
        <Route
          path="/home"
          element={
            <GalleryPage
              products={products}
              loading={loading}
              page={page}
              hasNext={hasNext}
              handlePageChange={handlePageChange}
            />
          }
        />
        <Route
          path="/about"
          element={<About requiredField="Art Institute of Chicago" />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <ErrorModal
        show={showErrorModal}
        title="Notice"
        message={errorMsg || ""}
        onClose={closeError}
      />
    </Router>
  );
}

export default App;

