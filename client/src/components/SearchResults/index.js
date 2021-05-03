import React from "react";
import { Col, Row } from "../../components/Grid";
import { useStoreContext } from "../../utils/GlobalState";
import ResultsCard from "../ResultsCard";

function SearchResults() {
  const [state] = useStoreContext();

  console.log(state.books);
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