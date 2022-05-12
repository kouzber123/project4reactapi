import React, { useEffect, useState } from "react";
import axios from "axios";
function AddSport() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [added, setAdded] = useState(false);

  const url = "https://hidden-cliffs-40709.herokuapp.com/api/add";
  function handleClick(e) {
    e.preventDefault();

    try {
      axios.post(url, { title: title, content: content }).then(response => {
        if (response) {
          const resp = response.data;
          setAdded(true);
        }
      });
    } catch (error) {}
  }

  return (
    <div>
      <form>
        <h1 className="h3 mb-3 fw-normal">Add new Sport to the collection 📖</h1>

        <div className="form-floating">
          <input onChange={e => setTitle(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="Title" />
          <label htmlFor="floatingInput">Sport Title</label>
        </div>
        <div className="form-floating">
          <input onChange={e => setContent(e.target.value)} type="text" className="form-control" id="floatingPassword" placeholder="Content" />
          <label htmlFor="floatingPassword">Sport Content</label>
        </div>
        <button onClick={e => handleClick(e)} className="w-100 btn btn-lg btn-primary" type="submit">
          Add Sport
        </button>
        {Boolean(added) && <h1>Added new Sport!</h1>}
      </form>
    </div>
  );
}

export default AddSport;
