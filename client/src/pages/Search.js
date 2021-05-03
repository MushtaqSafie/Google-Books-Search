import React from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchHead from "../components/SearchHead";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

const Search = () => {
  return (
    <Container>
      <SearchHead />
      <SearchForm />
      <SearchResults />
    </Container>
  );
};

export default Search;
