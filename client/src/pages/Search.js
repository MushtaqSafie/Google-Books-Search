import React from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchHead from "../components/SearchHead"

const Search = () => {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <SearchHead />

        </Col>
      </Row>
    </Container>
  );
};

export default Search;
