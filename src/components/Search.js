import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  //Axios request

  function handleInput(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }
  async function handleData(e) {
    //terniary operation for changing url according to the selected radio input
    const url = `https://hidden-cliffs-40709.herokuapp.com/api/${type === "title" ? "sport/" : ""}`;
    await axios
      .get(`${url}${searchTerm}`)
      .then(response => {
        const sport = response.data.result;
        setSearch(sport);
      })
      .catch(error => console.error(`Error: ${error})`));
  }
  return (
    <div>
      <div className="form-floating">
        <input onChange={handleInput} type="text" className="form-control" id="floatingInput" placeholder="title" />
        <label htmlFor="floatingInput">Titles starts with capital letter, some may end with an emoji 😟</label>
        <button className="w-100 btn btn-lg btn-primary" onClick={handleData}>
          Search
        </button>
      </div>
      <input onChange={e => setType(e.target.id)} type="radio" name="select" id="title" />{" "}
      <label htmlFor="title" value="title">
        Search by Title
      </label>{" "}
      {"|"} <input onChange={e => setType(e.target.id)} value="id" type="radio" name="select" id="id" /> <label htmlFor="id">Search by id</label>
      <Post post={search} />
    </div>
  );
}
export default Search;
