import "./DetailPage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function DetailPage() {
  const { id } = useParams();
  const [a, setData] = useState(null);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://price-comparison-server.herokuapp.com/creators/${id}`
      );
      setData(data);
      setLoad(false);
    }
    fetchData();
  }, [id]);

  return (
    <>
      {load && <h1>loading</h1>}
      {!load && (
        <div className="detail-page">
          <h2>{a[0].name.split(" ").slice(0, 3).join(" ")}</h2>
          <div className="row">
            <div className="column1">
              <img src={a[0].img} alt="product" />
            </div>
            <div className="column2">
              {a.dresult.map((r, i) => (
                <div className="checkoutButton" key={i}>
                  <div className="name-price">
                    <h3>{r.name}</h3>
                    <span>{r.price}</span>
                  </div>
                  <a href={r.url}>
                    <button className="card-button">Daraz</button>
                  </a>
                </div>
              ))}
              {a.sresult.map((r, i) => (
                <div className="checkoutButton" key={i}>
                  <div className="name-price">
                    <h3>{r.name}</h3>
                    <span>{r.price}</span>
                  </div>
                  <a href={r.url}>
                    <button className="card-button">sastodeal</button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default DetailPage;
