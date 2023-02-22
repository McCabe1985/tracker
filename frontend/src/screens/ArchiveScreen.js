import React from "react";
import { Row, Col } from "react-bootstrap";
import loads from "../data/loads";
import Load from "../components/Load";

export default function Archive() {
  return (
    <>
      <h1>All Deliveries</h1>
      <Row>
        {loads.map((load) => (
          <Col sm={12} md={6} lg={4} xl={3} key={load._id}>
            <Load load={load} />
          </Col>
        ))}
      </Row>
    </>
  );
}
