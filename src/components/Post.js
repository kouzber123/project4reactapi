import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Post(props) {
  const post = props.post;
  //if it has value then render this else nothing
  if (post) {
    return (
      <span className="text-muted small">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name:</th>
              <th scope="col">Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{post._id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          </tbody>
        </table>
      </span>
    );
  }
}

export default Post;
