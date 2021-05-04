import React from "react";
import { Container } from "../components/Grid";
import HeadTitle from "../components/HeadTitle";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import { useStoreContext } from "../utils/GlobalState";

const Search = () => {
  const [state] = useStoreContext();

  return (
    <Container>
      <HeadTitle />
      <SearchForm />
      {state.books[0] && <SearchResults />}
    </Container>
  );
};

export default Search;
