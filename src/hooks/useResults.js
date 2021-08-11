import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term,
          limit: 50,
          location: "New York"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
