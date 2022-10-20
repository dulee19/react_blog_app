import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const PostsPerPage = ({ articles, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group my-4">
      {articles.map((article) => (
        <ListGroup>
          <ListGroup.Item key={article.id}>
            <Link to="/article/:id">{article.title}</Link>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </ul>
  );
};

export default PostsPerPage;
