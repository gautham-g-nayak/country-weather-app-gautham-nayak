import { Link, useParams, useLocation } from "react-router-dom";
import Information from "../components/information";
import { useEffect, useState } from "react";
import axios from "axios";

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
      axios.get(url).then((response) => {
        console.log(response.data[0]["name"]);

        setData(response.data);
      }).catch((err) => {
        console.error(err);
        setError(true);
      });
    }
  }, [url]);

  if (data != null) {
    return (
      <div>
        <h1>Country Details of {camalize(pathParams.uuid)} </h1>
        <Information data={data[0]} />
        <Link
          to={`capital-details:${data[0]["capital"][0]}`}
          state={data[0]["capital"][0]}
          style={{
            pointerEvents: "auto",
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "15px 50px",
            textAlign: "center",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "16px",
            margin: "4px 10px",
          }}
        >
          {data[0]["capital"][0]}
        </Link>
      </div>
    );
  } if(info.state !== null) {
    return (
      <div>
        <h1>Country Details of {camalize(pathParams.uuid)} </h1>
        <Information data={info.state[0]} />
        <Link
          to={`capital-details:${info.state[0]["capital"][0]}`}
          state={info.state[0]["capital"][0]}
          style={{
            pointerEvents: "auto",
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "15px 50px",
            textAlign: "center",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "16px",
            margin: "4px 10px",
          }}
        >
          {info.state[0]["capital"][0]}
        </Link>
      </div>
    );
  }
  return(
    <div>
      {error ?<h1>Error</h1>:<h1>Loading...</h1>}
    </div>
  );
};

export default CountryDetails;
