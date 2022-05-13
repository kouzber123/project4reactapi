import axios from "axios";
import React, { useState } from "react";
//set states to read events etc

//send axios with id  and update data and set errors if true or false to render response
function UpdateSport() {
  const [updateTitle, setUpdateTitle] = useState("");
  const [id, setId] = useState("");
  const [updateSummary, setUpdateSummary] = useState("");
  const [isUpdated, setIsUpdated] = useState(Boolean);
  const [isError, setError] = useState(Boolean);
  async function updateData(e) {
    e.preventDefault();
    const url = `https://hidden-cliffs-40709.herokuapp.com/api/update/${id}`;
    const updated = {
      _id: id,
      title: updateTitle,
      body: updateSummary
    };
    try {
      await axios
        .put(`${url}`, updated)
        .then(response => {
          const update = response.data;
          console.log(update);
          setIsUpdated(true);
          setError(false);
        })
        .catch(error => {
          setError(true);
          setIsUpdated(false);
          console.error(`Error: ${error})`);
        });
    } catch (error) {
      console.log("bad call");
    }
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <input onChange={e => setId(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Sports Id" />
        </div>
        <div className="form-group">
          <input onChange={e => setUpdateTitle(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Rename sport" />
        </div>
        <div className="form-group">
          <textarea onChange={e => setUpdateSummary(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Rename a summary"></textarea>
        </div>
        <button onClick={e => updateData(e)} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {isUpdated ? <h1>Updates has been made 📨 </h1> : isError && <h1>Oh no...Did you add a wrong id perhaps ❓</h1>}
    </div>
  );
}

export default UpdateSport;
