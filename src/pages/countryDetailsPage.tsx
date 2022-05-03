import { Link, useParams, useLocation } from "react-router-dom";
import Information from "../components/information";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./countryDetailsPage.css";
import HorizontalDivider from "../components/horizontalDivider";

function camalize(str: any) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m: any, chr: string) => chr.toUpperCase());
}

const CountryDetails = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const info: any = useLocation();
  const pathParams = useParams();
  const url = "https://restcountries.com/v3.1/name/" + pathParams.uuid;

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
    return (
      <Box className="container">
        <Card
          sx={{ minWidth: 680, minHeight: 420, maxWidth: 700, borderRadius: 5 }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2>Information about the country {camalize(pathParams.uuid)} </h2>
          </div>
          <HorizontalDivider />
          <Information data={data[0]} />

          <HorizontalDivider />
          <div className="capitalDetailsDiv">
            <h4>Information about the capital : </h4>
            <Link
              className="capitalButton"
              to={`capital-details:${data[0]["capital"][0]}`}
              state={data[0]["capital"][0]}
            >
              {data[0]["capital"][0]}
            </Link>
          </div>
        </Card>
      </Box>
    );
  }
  if (info.state !== null) {
    return (
      <Box className="container">
        <Card
          sx={{ minWidth: 680, minHeight: 420, maxWidth: 700, borderRadius: 5 }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2>Information about the country {camalize(pathParams.uuid)} </h2>
          </div>
          <HorizontalDivider />
          <Information data={info.state[0]} />

          <HorizontalDivider />
          <div className="capitalDetailsDiv">
            <h4>Information about the capital : </h4>
            <Link
              className="capitalButton"
              to={`capital-details:${info.state[0]["capital"][0]}`}
              state={info.state[0]["capital"][0]}
            >
              {info.state[0]["capital"][0]}
            </Link>
          </div>
        </Card>
      </Box>
    );
  }
  return <div>{error ? <h1>Error</h1> : <h1>Loading...</h1>}</div>;
};

export default CountryDetails;
