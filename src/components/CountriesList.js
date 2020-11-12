import React from "react";
import { Link } from 'react-router-dom';

 const CountryList = (props) => {

  return (
    <div className="container">


      <div className="row">


        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
          <div className="list-group">
      {props.countries.map((eachCountry, index) => {
        return (

            <Link className="list-group-item list-group-item-action" to={`/countries/${eachCountry.cca3}`}><img src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`} alt=""/> {eachCountry.name.common}</Link>
        );
      })}
      </div>
      </div>
      </div>
      </div>
  );
};

export default CountryList