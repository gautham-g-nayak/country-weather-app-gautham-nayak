import Grid from "@mui/material/Grid";
import { CountryDetailsCardProps } from "../types";


const Information = ({ data }: CountryDetailsCardProps) => {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={4}>
       
        <h4>Population : {data.population}</h4>
        <h4>Latitude : {data.capitalInfo.latlng[0]}</h4>
        <h4>Longitude : {data.capitalInfo.latlng[1]}</h4>
        
      </Grid>
      <Grid item xs={6}>
        <img
          src={data.flags.png}
          style={{ border: "1px solid black", margin: "10px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Information;
