import "./CountryDetailsCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import HorizontalDivider from "../components/horizontalDivider";
import { CapitalDetailsCardProps } from "../types";
import Grid from "@mui/material/Grid";

const CapitalDetailsCard = ({ data }: CapitalDetailsCardProps) => {
  return (
    <Box className="container">
      <Card
        sx={{ minWidth: 600, minHeight: 300, maxWidth: 650, borderRadius: 5 }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Information about the capital {data.location.name} </h2>
        </div>
        <HorizontalDivider />

        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={6}>
            <h4>Temperature : {data.current.temperature}</h4>
            <h4>Wind Speed : {data.current.wind_speed}</h4>
            <h4>Time Zone Id : {data.location.timezone_id}</h4>
          </Grid>
          <Grid item xs={4}>
            <img
              src={data.current.weather_icons[0]}
              style={{ border: "1px solid black", margin: "10px" }}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CapitalDetailsCard;
