import React from "react";
import { Col, Row } from "../Grid";
import ResultsCard from "../ResultsCard";

function SearchResults() {

  return (

    <Row>
      <Col size="md-12">
        <h3 className="lead">Results</h3>
        <ResultsCard/>
      </Col>
    </Row>
    
  );
}

export default SearchResults;