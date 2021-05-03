import React from "react";
import { Col, Row } from "../../components/Grid";

function SearchForm() {

  return (
    <Row>
      <Col size="md-12">
        <form className="mb-5">
          <h3 className="lead">Book Search</h3>
          <div className="form-group">
            {/* <label>Book</label> */}
            <input type="text" className="form-control  col-12"  aria-describedby="searchKeyword" />
          </div>

          <button type="submit" className="btn btn-primary ">Find Book</button>
        </form>
      </Col>
   </Row>
  );
}

export default SearchForm;
