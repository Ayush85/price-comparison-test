import axios from "axios";
import React, { useState, useEffect } from "react";

function Card() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://price-comparison-server.herokuapp.com/creators")
      .then((response) => {
        setData(response.data);
      });
  });
  const newdata = Data.map((data) => {
    return (
      <div className="wrapper" key={data.id}>
        <div className="productSpecifications">
          <a href={`/detail/${data.id}`}>
            <img src={data.img} alt="product: ps5 controller" />
          </a>
          <h1> {data.name.split(" ").slice(0, 3).join(" ")} </h1>
        </div>
      </div>
    );
  });
  return newdata;
}
export default Card;
