import React, { useEffect } from "react";
import { Container } from "../components/Grid";
import HeadTitle from "../components/HeadTitle";
import SavedCard from "../components/SavedCard";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { UPDATE_FAVORITES, LOADING } from "../utils/actions";

const Saved = () => {
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
      <HeadTitle />
      {state.favorites[0] && <SavedCard/>}
    </Container>
  );
};

export default Saved;

