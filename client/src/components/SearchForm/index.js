import React from "react";

function SearchForm() {

  return (
    <form>
      <h3 className="lead">Book Search</h3>
      <div className="form-group">
        {/* <label>Book</label> */}
        <input type="text" className="form-control  col-12"  aria-describedby="searchKeyword" />

      </div>
    

     

      <div className="form-group d-inline-block align-right">
      <button type="submit" className="btn btn-primary ">Submit</button>
      
      </div>
      <div className="row justify-content-end">
        
        </div>
      
    </form>
  );
}

export default SearchForm;
