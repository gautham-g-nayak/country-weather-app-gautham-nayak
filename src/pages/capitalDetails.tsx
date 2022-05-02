import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CapitalDetails = () => {
  const pathParams = useParams();
  const url = `http://api.weatherstack.com/current?access_key=898d51248b4c0f2c14f7e1e68224d6d0&query=${pathParams.uuid}`;
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setDetail(response.data);
    });
  }, [url]);

  if (detail !== null) {
    return (
      <div>
        <h1>Capital Detail of {pathParams.uuid}</h1>
        <h5>Temperature : {detail["current"]["temperature"]}</h5>
        <h5>Weather Icon :</h5>
        <img src={detail["current"]["weather_icons"][0]} style = {{border: "3px solid black", margin : "10px" }} />
        <h5>Wind Speed : {detail["current"]["temperature"]}</h5>
        <h5>Time Zone Id : {detail["location"]["timezone_id"]}</h5>
      </div>
    );
  }

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default CapitalDetails;
