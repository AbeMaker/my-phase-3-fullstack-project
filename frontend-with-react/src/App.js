import React, { useEffect, useState } from "react";
import "./App.css";
import PostCounty from "./components/PostCounty";
import DeleteCounty from "./components/DeleteCounty";
import Navbar from "./components/Navbar";


function App() {
  const [counties, setCounties] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("/counties")
      .then((res) => res.json())
      .then((data) => setCounties(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, country, population, county_number) => {
    await fetch("/counties/add/:name/:country/:population/:county_number", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        country: country,
        population: population,
        county_number: county_number,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setCounties((counties) => [...counties, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const onDelete = async (id) => {
    await fetch(`/counties/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setCounties(
            counties.filter((county) => {
              return county.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(counties);

  return (
    <div className="App">
     <Navbar/>
      <br />
      <PostCounty onAdd={onAdd} />
      <div>
        {counties.map((county) => (
          <DeleteCounty
            id={county.id}
            key={county.id}
            name={county.name}
            country={county.country}
            population={county.population}
            county_number={county.county_number}
            onDelete={onDelete}
            
          />
        ))}
        <h2>There are currently {counties.length} counties in the database.</h2>

      </div>
    </div>
  );
};
export default App;