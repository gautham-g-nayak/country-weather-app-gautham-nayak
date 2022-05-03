import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import "./searchCountryPage.css";
import Box from "@mui/material/Box";

function SearchCountry() {
  const API_ENDPOINT = "https://restcountries.com/v3.1/name/";
  const [countryName, setCountryName] = useState("");
  const [data, setData] = useState([]);
  const debouncedUrl = useDebounce(API_ENDPOINT + countryName);
  const [buttonCondition, setButtonCondition] = useState(false);

  const inputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  const handleFetchStories = useCallback(async () => {
    try {
      const response = await axios.get<[]>(debouncedUrl);
      console.log("done");
      if (
        response.data.length < 2 &&
        response.data.length > 0 &&
        response.data
          .map((e: any) => {
            return e.name.common;
          })[0]
          .toLowerCase() === countryName.toLowerCase()
      ) {
        setButtonCondition(true);
        console.log(response.data);
        setData(response.data);
      }
      if (
        buttonCondition === true &&
        response.data
          .map((e: any) => {
            return e.name.common;
          })[0]
          .toLowerCase() !== countryName.toLowerCase()
      ) {
        setButtonCondition(false);
        console.log("false--");
      }
    } catch {
      if (buttonCondition === true) {
        setButtonCondition(false);
      }
      console.log("err");
    }
  }, [debouncedUrl]);

  useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  return (
    <Box className="inputContainer">
      <input
        className="inputField"
        placeholder="Country Name"
        type="text"
        name="name"
        onChange={inputsHandler}
      />
      <Link
        to={`/country-details:${countryName}`}
        state={data}
        className="inputButton"
        style={{
          pointerEvents: buttonCondition ? "auto" : "none",
          backgroundColor: buttonCondition ? "#0AA1DD" : "#babfc4",
        }}
      >
        Search
      </Link>
    </Box>
  );
}

export default SearchCountry;
