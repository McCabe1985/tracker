import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Load from "../components/Load";

export default function Archive() {
  const [loads, setLoads] = useState([]);

  useEffect(() => {
    const fetchLoads = async () => {
      const { data } = await axios.get("/api/loads");

      setLoads(data);
    };

    fetchLoads();
  }, []);
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
