import React, { useState } from "react";
import { Col, Row } from "../../components/Grid";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_FAVORITE, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { RiSaveFill } from "react-icons/ri";

const style = {
  position: "fixed",
  top: "10px",
  right: "10px",
  width: "300px",
}

function ResultsCard() {
  const [state, dispatch] = useStoreContext();
  const [notify, setNotify] = useState(false);
  
  const handleSave = (id) => {
    dispatch({ type: LOADING });
    API.addSaveBook(state.books[id])
    .then((result) => {
      dispatch({
        type: ADD_FAVORITE,
        post: result.data,
      });
      setNotify(true)
    })
    .catch((err) => console.log(err));
    setTimeout(() => setNotify(false), 1000);
  }

  return (
    <Row>
      <Col size="md-12">
        {state.books.map((booksResult, index) => (
          <div key={index} className="card mb-3 p-3" >

            <div className="d-flex">
              <div className="mr-auto bookTitle">
                <h4 className="my-2">{booksResult.title}</h4>
              </div>
              <a className="btn btn-outline-primary m-1" target="_blank" href={booksResult.link} rel="noreferrer" style={{maxHeight: "40px"}} >View</a>
              <button type="button" onClick={() => handleSave(index)} className="btn btn-outline-success m-1" style={{maxHeight: "40px"}} ><RiSaveFill/> Save</button>
            </div>

            <blockquote className="blockquote">
              <footer className="blockquote-footer">Written By <cite title="authors">{booksResult.authors.join(", ")}</cite></footer>
            </blockquote>

            <Row>
              <Col size="md-3 sm-4 lg-2">
                <img className="mb-3" src={booksResult.image} alt="bookImage"/>
              </Col>
              <Col size="md-9 sm-8 lg-10">
                <p className="card-text">{booksResult.description}</p>
              </Col>
            </Row>

          </div>
        ))}
        {notify &&
        <div className="alert alert-success notify" role="alert" style={style}>
          Succeccfully added!
        </div>}

      </Col>
    </Row>
    
  );
}


export default ResultsCard;