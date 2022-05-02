const Information = ({
    data: { population , capitalInfo, flags},
  }: any) => {

  return (
    
    <div style={{margin : "10px"}}>
      <h5>Population : {population}</h5>
      <h5>Latitude : {capitalInfo["latlng"][0]}      Longitude : {capitalInfo["latlng"][1]}</h5>
      <h5>Flag :</h5>
      <img src={flags["png"]} style = {{border: "3px solid black", margin : "10px" }} />
    </div>
  );
};

export default Information;
