import React, { useState } from "react";
import { Col, Row } from "../Grid";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { RiDeleteBin6Fill } from "react-icons/ri";

const style = {
  position: "fixed",
  top: "10px",
  right: "10px",
  width: "300px",
}

function SavedCard() {
  const [state, dispatch] = useStoreContext();
  const [notifySuccess, setNotifySuccess] = useState(false);


  const handleDelete = (id) => {
    dispatch({ type: LOADING })
    API.deleteSaveBook(id)
    .then(() => {
      dispatch({
        type: REMOVE_FAVORITE,
        _id: id
      })
      setNotifySuccess(true)
    })
    .catch(err => console.log(err));
    setTimeout(() => setNotifySuccess(false), 2000);
  }

  return (
    
    <Row>
      <Col size="md-12">
        <h3 className="lead">Saved Books</h3>
        <Row>
          <Col size="md-12">
            {state.favorites.reverse().map((item, index) => (
              <div key={index} className="card mb-3 p-3" >

                <div className="d-flex">
                  <div className="mr-auto bookTitle">
                    <h4 className="my-2">{item.title}</h4>
                  </div>
                  <a className="btn btn-outline-primary m-1" target="_blank" href={item.link} rel="noreferrer" style={{maxHeight: "40px"}}>View</a>
                  <button type="button" onClick={() => handleDelete(item._id)} className="btn btn-outline-danger m-1" style={{maxHeight: "40px"}} ><RiDeleteBin6Fill/> Delete</button>
                </div>

                <blockquote className="blockquote">
                  <footer className="blockquote-footer">Written By <cite title="authors">{item.authors.join(", ")}</cite></footer>
                </blockquote>

                <Row>
                  <Col size="md-3 sm-4 lg-2">
                    <img className="mb-3" src={item.image} alt="bookImage"/>
                  </Col>
                  <Col size="md-9 sm-8 lg-10">
                    <p className="card-text">{item.description}</p>
                  </Col>
                </Row>

              </div>
            ))}
            {notifySuccess &&
            <div className="alert alert-danger notify" role="alert" style={style}>
              Delete Succeccfully!
            </div>}
          </Col>
        </Row>

      </Col>
    </Row>
    
  );
}

export default SavedCard;