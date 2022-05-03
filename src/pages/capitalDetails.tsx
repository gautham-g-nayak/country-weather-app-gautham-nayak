import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./countryDetailsPage.css";
import HorizontalDivider from "../components/horizontalDivider";
import Grid from "@mui/material/Grid";

const CapitalDetails = () => {
  const pathParams = useParams();
  const url = `http://api.weatherstack.com/current?access_key=898d51248b4c0f2c14f7e1e68224d6d0&query=${pathParams.uuid}`;
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        
        if(response.data.length >1 ){
          setError(true);
        }
        setDetail(response.data);
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  }, [url]);

  if (detail !== null) {
    return (
      <Box className="container">
        <Card
          sx={{ minWidth: 600, minHeight: 300, maxWidth: 650, borderRadius: 5 }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2>Information about the capital {pathParams.uuid} </h2>
          </div>
          <HorizontalDivider />

          <Grid container spacing={1} justifyContent="center">
            <Grid item xs={6}>
              <h4>Temperature : {detail["current"]["temperature"]}</h4>
              <h4>Wind Speed : {detail["current"]["temperature"]}</h4>
              <h4>Time Zone Id : {detail["location"]["timezone_id"]}</h4>
            </Grid>
            <Grid item xs={4}>
              <img
                src={detail["current"]["weather_icons"][0]}
                style={{ border: "1px solid black", margin: "10px" }}
              />
            </Grid>
          </Grid>
        </Card>
      </Box>
    );
  }

  return <div>{error ? <h1>Error</h1> : <h1>Loading...</h1>}</div>;
};

export default CapitalDetails;
