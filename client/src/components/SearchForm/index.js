import React, { useRef } from "react";
import { Col, Row } from "../../components/Grid";
import { useStoreContext } from "../../utils/GlobalState";
import { BOOKS_RESULT, RESET_RESULT } from '../../utils/actions';
import API from "../../utils/API"

function SearchForm() {
  const [state, dispatch] = useStoreContext();

  const keywordRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: RESET_RESULT });
    API.getSearch(keywordRef.current.value)
      .then(results => {
        console.log(results);
        dispatch({
          type: BOOKS_RESULT,
          books: results.data
        })
      })
      .catch(err => console.log(err));

    keywordRef.current.value = "";
  }

  return (
    <Row>
      <Col size="md-12">
        <form className="mb-5" onSubmit={handleSearch}>
          <h3 className="lead">Book Search</h3>
          <div className="form-group">
            {/* <label>Book</label> */}
            <input ref={keywordRef} type="text" className="form-control  col-12"  aria-describedby="searchKeyword" />
          </div>

          <button type="submit" className="btn btn-primary ">Find Book</button>
        </form>
      </Col>
   </Row>
  );
}

export default SearchForm;
