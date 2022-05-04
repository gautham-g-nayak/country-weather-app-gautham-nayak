import "./CountryDetailsCard.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import HorizontalDivider from "../components/horizontalDivider";
import Information from "../components/information";
import { CountryDetailsCardProps } from "../types";
import InputButton from "./InputButton";

const CountryDetailsCard = ({ data }: CountryDetailsCardProps) => {
  return (
    <Box className="container">
      <Card 
        sx={{ minWidth: 680,  maxWidth: 700, borderRadius: 5 }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Information about the country {data.name.common} </h2>
        </div>
        <HorizontalDivider />
        <Information data={data} />

        <HorizontalDivider />
        <div className="capitalDetailsDiv">
          <h4>Information about the capital : </h4>
          <InputButton
            to={`capital-details:${data.capital[0]}`}
            data={data.capital[0]}
            className="inputButton"
            label={data.capital[0]}
          />
        </div>
      </Card>
    </Box>
  );
};

export default CountryDetailsCard;
