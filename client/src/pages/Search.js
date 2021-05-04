import React from "react";
import { Container } from "../components/Grid";
import SearchHead from "../components/SearchHead";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import { useStoreContext } from "../utils/GlobalState";

const Search = () => {
  const [state] = useStoreContext();
  console.log(state.books);
  return (
    <Container>
      <SearchHead />
      <SearchForm />
      {state.books[0] && <SearchResults />}
    </Container>
  );
};

export default Search;
