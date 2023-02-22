import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Load({ load }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/load/${load._id}`}>
        {load.date} | {load.timeIn}
      </Link>
      <Card.Text>{load.signedBy}</Card.Text>
    </Card>
  );
}
