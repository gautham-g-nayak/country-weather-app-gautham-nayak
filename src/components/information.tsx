import Grid from "@mui/material/Grid";

const Information = ({ data: { population, capitalInfo, flags } }: any) => {
  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={4}>
       
        <h4>Population : {population}</h4>
        <h4>Latitude : {capitalInfo["latlng"][0]}</h4>
        <h4>Longitude : {capitalInfo["latlng"][1]}</h4>
        
      </Grid>
      <Grid item xs={6}>
        <img
          src={flags["png"]}
          style={{ border: "1px solid black", margin: "10px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Information;
