import React, { useState, useEffect } from "react";
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function SpecificLoadScreen() {
  const params = useParams();

  const [load, setLoad] = useState({});

  useEffect(() => {
    const fetchLoads = async () => {
      const { data } = await axios.get(`/api/loads/${params.id}`);

      setLoad(data);
    };

    fetchLoads();
  }, []);
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
