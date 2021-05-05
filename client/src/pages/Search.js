import React, { useEffect } from "react";
import { Container } from "../components/Grid";
import HeadTitle from "../components/HeadTitle";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_FAVORITES, LOADING } from "../utils/actions";
import API from "../utils/API";

const Search = () => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING })
    API.getBooks()
    .then(res => {
      dispatch({
        type: UPDATE_FAVORITES,
        favorites: res.data
      })
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <HeadTitle
        title="Google Books Search"
        subTitle="Search for and Save Books of Interest"  
      />
      <SearchForm />
      {state.books[0] && <SearchResults />}
    </Container>
  );
};

export default Search;
