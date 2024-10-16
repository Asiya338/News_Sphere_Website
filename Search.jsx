
import React, { useState, useEffect } from "react";

import Card from "./Card";
import Loader from "./loader";
import axios from "axios";
function Search(props) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const pageSize = 6;

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://localhost:5000/search?q=${query}&page=${page}&pageSize=${pageSize}`
        );
        console.log(response.data);
        if (response.data.success) {
          setData(response.data.data.articles || []);
          setTotalResults(response.data.data.totalResults || 10);
        } else {
          setError(response.data.message || "No results found.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch results.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, page]);
  return (
    <>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 ">
        {!loading ? (
          data.length > 0 ? (
            data.map((element, index) => (
              <Card
                key={index}
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                publishedAt={element.publishedAt}
                url={element.url}
                author={element.author}
                source={element.source.name}
              />
            ))
          ) : (
            <p className="unsuccess">
              No articles found for this category or criteria.
            </p>
          )
        ) : (
          <Loader />
        )}
      </div>
      {!loading && data.length > 0 && (
        <div className="pagination flex justify-center gap-14 my-10 items-center">
          <button
            disabled={page <= 1}
            className="pagination-btn"
            onClick={handlePrev}
          >
            Prev
          </button>
          <p className="font-semibold opacity-80">
            {page} of {Math.ceil(totalResults / pageSize)}
          </p>
          <button
            className="pagination-btn"
            disabled={page >= Math.ceil(totalResults / pageSize)}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default Search;
