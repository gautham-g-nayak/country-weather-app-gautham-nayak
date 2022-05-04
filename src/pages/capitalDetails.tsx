import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../components/CountryDetailsCard.css";
import CapitalDetailsCard from "../components/CapitalDetailsCard";
import LoadingIndicator from "../components/LoadingIndicator";

const CapitalDetails = () => {
  const pathParams = useParams();
  const url : string = `http://api.weatherstack.com/current?access_key=adc214b9f8383d6e7fb9251fbca3ce9b&query=${pathParams.uuid}`;
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (response.data.success === false) {
          setError(true);
        }
        console.log(response.data);
        setDetail(response.data);
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  }, [url]);

  if (detail !== null && error === false) {
    return <CapitalDetailsCard data={detail} />;
  }

  return error ? <h1>Error</h1> : <LoadingIndicator/>;
};

export default CapitalDetails;
