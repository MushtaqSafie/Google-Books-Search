import React from "react";
import { Col, Row } from "../../components/Grid";
import { useStoreContext } from "../../utils/GlobalState";

function ResultsCard() {
  const [state] = useStoreContext();

  return (
    <Row>
      <Col size="md-12">
        {state.books.map((booksResult, index) => (
          <div key={index} className="card mb-3 p-3" >

            <div className="d-flex">
              <div className="mr-auto">
                <h4 className="my-2">{booksResult.title}</h4>
              </div>
              <a className="btn btn-outline-primary m-1" target="_blank" href={booksResult.link} rel="noreferrer">View</a>
              <button type="button" className="btn btn-outline-success m-1">Save</button>
            </div>

            <blockquote className="blockquote">
              <footer className="blockquote-footer">Written By <cite title="authors">{booksResult.authors.join(", ")}</cite></footer>
            </blockquote>

            <div className="row no-gutters">
              <div className="col-md-2">
                <img src={booksResult.image} alt="bookImage"/>
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <p className="card-text">{booksResult.description}</p>
                </div>
              </div>
            </div>

          </div>
        ))}
      </Col>
    </Row>
    
  );
}

export default ResultsCard;