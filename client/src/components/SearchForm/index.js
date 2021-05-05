import React, { useRef, useState } from "react";
import { Col, Row } from "../../components/Grid";
import { useStoreContext } from "../../utils/GlobalState";
import { BOOKS_RESULT, RESET_RESULT } from '../../utils/actions';
import API from "../../utils/API";
import { BsSearch } from "react-icons/bs";

function SearchForm() {
  const [state, dispatch] = useStoreContext();
  
  const keywordRef = useRef();
  const [validKeyword, setvalidKeyword] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    // if the input field is empty alert to type a keyword
    keywordRef.current.value ? setvalidKeyword(!0) : setvalidKeyword(!1);

    if (keywordRef.current.value) {
      dispatch({ type: RESET_RESULT });
      API.getSearch(keywordRef.current.value)
        .then(results => {
          dispatch({
            type: BOOKS_RESULT,
            books: results.data
          })
        })
        .catch(err => console.log(err));
  
      keywordRef.current.value = "";
    }

  }

  return (
    <Row>
      <Col size="md-12">
        <form className="mb-5" onSubmit={handleSearch}>
          <h3 className="lead">Book Search</h3>
          <div className="form-group">
            <input ref={keywordRef} type="text" className="form-control  col-12"  aria-describedby="searchKeyword" />
          </div>
          {!validKeyword &&
          <div className="alert alert-danger" role="alert">
            Enter a valid keyword to search for Book!
          </div>
          }

          <button type="submit" className="btn btn-primary "><BsSearch/> Search Book</button>
        </form>
      </Col>
   </Row>
  );
}

export default SearchForm;
