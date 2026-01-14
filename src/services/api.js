const BASE_URL = "https://api.artic.edu/api/v1/artworks";

export const getArtworks = async (page = 1) => {
  try {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error in getArtworks:", error);
    return [];
  }
};

export const searchArtWorksWithFull = async (query, page = 1) => {
  try {
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&page=${page}`);
    if (!res.ok) return [];
    const json = await res.json();
    const ids = (json.data || []).map(hit => hit.id);
    const details = await Promise.all(ids.map(id => fetch(`https://api.artic.edu/api/v1/artworks/${id}`).then(r => r.ok ? r.json() : null)));
    return details.filter(Boolean).map(d => d.data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

