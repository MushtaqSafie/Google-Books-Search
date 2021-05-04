import React from "react";
import { Col, Row } from "../Grid";

function HeadTitle() {

  return (
    <Row>
      <Col size="md-12">
        <div className="mt-5 pb-3" style={{textAlign: "center"}}>
          <h1 className="display-4">(React) Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
        </div>
      </Col>
    </Row>
  );
}

export default HeadTitle;
