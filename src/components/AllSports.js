import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
function AllSports() {
  const [allSports, setAllSports] = useState([]);
  const url = "https://hidden-cliffs-40709.herokuapp.com/api/getall";

  const [time, setTime] = useState();

  //updates the page every time changes occur
  const refresh = () => {
    setTime({});
  };

  async function handleData() {
    await axios
      .get(`${url}`)
      .then(response => {
        const sport = response.data.result;
        setAllSports(sport);
      })
      .catch(error => console.error(`Error: ${error})`));
  }

  //listens 10s to refresh data

  handleData();
  return (
    <div>
      <h1 onLoad={handleData}>Here all our sports</h1>
      {allSports.map(sport => {
        return <Post key={sport._id} post={sport} />;
      })}
    </div>
  );
}

export default AllSports;
