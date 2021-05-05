import React, { createContext, useReducer, useContext } from "react";
import {
  LOADING,
  // SEARCH_KEYWORD,
  BOOKS_RESULT,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  UPDATE_FAVORITES,
  RESET_RESULT
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case BOOKS_RESULT:
    return {
      ...state,
      books: [...action.books],
      loading: false
    };
    
  case RESET_RESULT:
    return {
      ...state,
      books: [],
      loading: true
    };

  // case SEARCH_KEYWORD:
  //   return {
  //     ...state,
  //     searchKeyword: action.searchKeyword,
  //     loading: false
  //   };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.book, ...state.favorites],
      loading: false
    };

  case UPDATE_FAVORITES:
    return {
      ...state,
      favorites: action.favorites,
      loading: false
    };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((book) => {
        return book._id !== action._id; 
      })
    };

  // done
  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    favorites: [],
    // searchKeyword: "",
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
