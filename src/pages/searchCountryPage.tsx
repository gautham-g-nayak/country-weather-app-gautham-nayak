import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "../hooks/useDebounce";
import "./SearchCountryPage.css";
import Box from "@mui/material/Box";
import InputField from "../components/InputField";
import InputButton from "../components/InputButton";

function SearchCountry() {
  const API_ENDPOINT: string = "https://restcountries.com/v3.1/name/";
  const [countryName, setCountryName] = useState("");
  const [data, setData] = useState([]);
  const debouncedUrl = useDebounce(API_ENDPOINT + countryName);
  const [buttonCondition, setButtonCondition] = useState(false);

  const inputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(e.target.value);
  };

  const handleData = useCallback(async () => {
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
    handleData();
  }, [handleData]);

  return (
    <Box className="inputContainer">
      <InputField
        className="inputField"
        placeHolder="Country Name"
        onChange={inputsHandler}
      />
      <InputButton
        to={`/country-details:${countryName}`}
        data={data}
        className="inputButton"
        buttonCondition={buttonCondition}
        label="Search"
      />
    </Box>
  );
}

export default SearchCountry;
