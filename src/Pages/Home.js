import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  let history = useHistory();
  return (
    <div className="d-flex flex-column w-50">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          history.push("/liberty_preserve");
        }}
      >
        Liberty Preserve
      </button>
      <button
        type="button"
        className="btn btn-success ms-5"
        onClick={() => {
          history.push("/my_game");
        }}
      >
        Inventory
      </button>
      <button
        type="button"
        className="btn btn-success ms-5"
        onClick={() => {
          history.push("/travel");
        }}
      >
        Travel
      </button>
    </div>
  );
};

export default Home;
