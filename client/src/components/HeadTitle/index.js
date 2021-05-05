import React from "react";
import { Col, Row } from "../Grid";

function HeadTitle(props) {

  return (
    <Row>
      <Col size="md-12">
        <div className="mt-5 pb-3" style={{textAlign: "center"}}>
          <h1 className="display-4">{props.title}</h1>
          <p className="lead">{props.subTitle}</p>
        </div>
      </Col>
    </Row>
  );
}

export default HeadTitle;
