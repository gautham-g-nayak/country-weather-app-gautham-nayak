import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CountryDetailsCard from "../components/CountryDetailsCard";
import LoadingIndicator from "../components/LoadingIndicator";

const CountryDetails = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const info: any = useLocation();
  const pathParams = useParams();
  const url: string = "https://restcountries.com/v3.1/name/" + pathParams.uuid;

  useEffect(() => {
    console.log("useEffect executed");
    if (info.state === null) {
      console.log("if executed");
      axios
        .get(url)
        .then((response) => {
          console.log(response.data[0]["name"]);

          setData(response.data);
        })
        .catch((err) => {
          console.error(err);
          setError(true);
        });
    }
  }, [url]);

  if (data != null) {
    return <CountryDetailsCard data={data[0]} />;
  }
  if (info.state !== null) {
    return <CountryDetailsCard data={info.state[0]} />;
  }
  return error ? <h1>Error</h1> : <LoadingIndicator/>;
};

export default CountryDetails;
