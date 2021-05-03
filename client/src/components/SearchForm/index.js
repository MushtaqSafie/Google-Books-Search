import React from "react";

function SearchForm() {

  return (
    <form>
      <h3 className="lead">Book Search</h3>
      <div className="form-group">
        {/* <label>Book</label> */}
        <input type="text" className="form-control  col-12"  aria-describedby="searchKeyword" />
      </div>

      <button type="submit" className="btn btn-primary ">Find Book</button>
    </form>
  );
}

export default SearchForm;
