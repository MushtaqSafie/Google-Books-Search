import React, { useState } from "react";
import { Col, Row } from "../../components/Grid";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_FAVORITE, LOADING, UPDATE_FAVORITES } from "../../utils/actions";
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
  const [notifySuccess, setNotifySuccess] = useState(false);
  const [notifyExists, setNotifyExists] = useState(false)
  const [notifyTitle, setNotifyTitle] = useState("")

  const handleSave = (id) => {
    dispatch({ type: LOADING });

    API.getBooks().then(res => {
      // check if table already exists in the database
      const checkItem = res.data.find( ({ title }) => title  === state.books[id].title);
      if (checkItem) {
        dispatch({
          type: UPDATE_FAVORITES,
          favorites: res.data
        })
        setNotifyExists(true);
        setNotifyTitle(state.books[id].title);
        setTimeout(() => setNotifyExists(false), 2000);
      } else {
        API.addSaveBook(state.books[id])
        .then((result) => {
          dispatch({
            type: ADD_FAVORITE,
            post: result.data,
          });
          setNotifySuccess(true);
          setNotifyTitle(state.books[id].title);
        })
        .catch((err) => console.log(err));
        setTimeout(() => setNotifySuccess(false), 1000);
      }
    })
    .catch(err => console.log(err));
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
        {notifySuccess &&
        <div className="alert alert-success notify" role="alert" style={style}>
          <p><strong>Title:</strong> {notifyTitle}</p>
          Succeccfully added!
        </div>}
        {notifyExists &&
        <div className="alert alert-danger notify" role="alert" style={style}>
          <p><strong>Title:</strong> {notifyTitle}</p>
          This book is already in your Saved Library!
        </div>}

      </Col>
    </Row>
    
  );
}


export default ResultsCard;