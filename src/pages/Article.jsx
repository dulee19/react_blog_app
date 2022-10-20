import React from "react";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div className="my-4">
      <Link to="/" className="btn btn-dark">
        Go Back
      </Link>
    </div>
  );
};

export default Article;
