import React from "react";
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import loads from "../data/loads";

export default function SpecificLoadScreen() {
  const params = useParams();
  const load = loads.find((l) => l._id === params.id);
  return (
    <Card>
      <Link className="btn btn-light rounded" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>{load.content}</ListGroup.Item>
            <ListGroup.Item>Date: {load.date}</ListGroup.Item>
            <ListGroup.Item>{load.timeIn}</ListGroup.Item>
            <ListGroup.Item>{load.company}</ListGroup.Item>
            <ListGroup.Item>{load.registration}</ListGroup.Item>
            <ListGroup.Item>{load.signedBy}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
}
