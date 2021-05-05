import React from "react";
import { Col, Row } from "../Grid";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FAVORITE, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function SavedCard() {
  const [state, dispatch] = useStoreContext();

  const handleDelete = (id) => {
    dispatch({ type: LOADING })
    API.deleteSaveBook(id)
    .then(() => {
      dispatch({
        type: REMOVE_FAVORITE,
        _id: id
      })
    })
    .catch(err => console.log(err));
  }

  return (
    
    <Row>
      <Col size="md-12">
        <h3 className="lead">Saved</h3>
        <Row>
          <Col size="md-12">
            {state.favorites.map((item, index) => (
              <div key={index} className="card mb-3 p-3" >

                <div className="d-flex">
                  <div className="mr-auto">
                    <h4 className="my-2">{item.title}</h4>
                  </div>
                  <a className="btn btn-outline-primary m-1" target="_blank" href={item.link} rel="noreferrer">View</a>
                  <button type="button" onClick={() => handleDelete(item._id)} className="btn btn-outline-danger m-1">Delete</button>
                </div>

                <blockquote className="blockquote">
                  <footer className="blockquote-footer">Written By <cite title="authors">{item.authors.join(", ")}</cite></footer>
                </blockquote>

                <div className="row no-gutters">
                  <div className="col-md-2">
                    <img src={item.image} alt="bookImage"/>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </Col>
        </Row>

      </Col>
    </Row>
    
  );
}

export default SavedCard;