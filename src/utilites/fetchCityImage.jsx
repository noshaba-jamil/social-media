const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function fetchCityImage(city) {
  if (!city || !UNSPLASH_KEY) return "";
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(city)}&per_page=1&orientation=landscape&client_id=${UNSPLASH_KEY}`
  );
  const data = await res.json();
  return data?.results?.[0]?.urls?.small || "";
}
