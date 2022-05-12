import axios from "axios";
import React, { useState } from "react";

//same as updating....
function DeleteSport() {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setError] = useState(Boolean);
  const [id, setId] = useState("");
  async function handleClick(e) {
    e.preventDefault();
    const url = `https://hidden-cliffs-40709.herokuapp.com/api/delete/${id}`;

    try {
      await axios
        .delete(`${url}`)
        .then(response => {
          const update = response.data;
          console.log(update);
          setIsDeleted(true);
          setError(false);
        })
        .catch(error => {
          setError(true);
          console.error(`Error: ${error})`);
        });
    } catch (error) {
      console.log("bad call");
    }
  }

  return (
    <div>
      <form>
        <h1 className="h3 mb-3 fw-normal">Delete A sport</h1>

        <div className="form-floating">
          <input onChange={e => setId(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="Title" />
          <label htmlFor="floatingInput">Sport ID</label>
        </div>
        <button onClick={e => handleClick(e)} className="w-100 btn btn-lg btn-primary" type="submit">
          Add Sport
        </button>
      </form>
      {isDeleted ? <h1>Selected sport has been removed! 🚯</h1> : isError && <h1>We had an problem with finding the ID 📄</h1>}
    </div>
  );
}

export default DeleteSport;
