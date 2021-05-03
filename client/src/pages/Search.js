import React from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchHead from "../components/SearchHead";
import SearchForm from "../components/SearchForm";

const Search = () => {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <SearchHead />
          <SearchForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
